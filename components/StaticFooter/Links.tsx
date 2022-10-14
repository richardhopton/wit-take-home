import styles from "./Links.module.scss";

type LinkProps = {
  title: string;
  href?: string;
};

const Link = ({ title, href }: LinkProps) => (
  <a className={styles.link} href={href}>
    {title}
  </a>
);

const Separator = () => <span className={styles.separator}>|</span>;
const Links = () => {
  const links = [
    { title: "FAQ" },
    { title: "Privacy Policy" },
    { title: "Terms of Service" },
  ];
  return (
    <div className={styles.links}>
      {links.map((props, index) => (
        <>
          {index > 0 && <Separator />}
          <Link {...props} />
        </>
      ))}
    </div>
  );
};

export default Links;
