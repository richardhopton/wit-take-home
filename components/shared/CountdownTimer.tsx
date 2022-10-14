import moment from "moment";
import { useState, useEffect } from "react";

export type CountdownTimerProps = {
  dateTime: Date;
};

const CountdownTimer = ({ dateTime }: CountdownTimerProps) => {
  const calculate = () => moment(dateTime).diff(moment());

  // set this to zero for static rendering...
  const [remainingTime, setRemainingTime] = useState<number>(0);
  // ... and update on client side to prevent SSR issues
  useEffect(() => {
    const remainingTime = calculate();
    // if we've already passed the time then no need to set
    if (remainingTime < 0) return;

    setRemainingTime(remainingTime);
    // refresh the remaining time every second
    const interval = setInterval(() => {
      const remainingTime = calculate();
      // if the time runs out clear the interval
      if (remainingTime < 0) {
        clearInterval(interval);
        return;
      }
      setRemainingTime(remainingTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (remainingTime < 1) return null;
  return (
    <>
      {moment.duration(remainingTime).asDays().toFixed()}D{" "}
      {moment.utc(remainingTime).format("hh:mm:ss")}
    </>
  );
};
export default CountdownTimer;
