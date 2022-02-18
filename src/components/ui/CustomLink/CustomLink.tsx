import { Link, useMatch } from "react-router-dom";

type CustomLinkProps = {
  to: string;
};

const CustomLink: React.FC<CustomLinkProps> = ({ children, to, ...props }) => {
  const match = useMatch(to);

  return (
    <Link
      to={to}
      style={{
        color: match ? "#FFF" : "#122434",
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
