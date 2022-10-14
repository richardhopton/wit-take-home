import { Stack } from "react-bootstrap";
import styles from "./Steps.module.scss";

type StepProps = {
  text: string;
};
const Step = ({ text }: StepProps) => {
  return <div className={styles.step}>{text}</div>;
};

const steps = [
  "Step one id libero imperdiet, lacinia arcu ac, ullamcorper ligula. Quisque ut venenatis nulla. Nulla est magna, gravida at enim eget, imperdiet lobortis.",
  "Step two pulvinar, enim lacinia congue lacinia, enim quam imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod pellentesque.",
  "Step three sit amet aliquam quam faucibus sed. Proin nec ultricies libero. Vivamus sed urna.",
];

const Steps = () => {
  return (
    <div className={styles.stack}>
      {steps.map((step, index) => (
        <Step key={index} text={step} />
      ))}
    </div>
  );
};

export default Steps;
