import Button, { ButtonProps } from "@mui/material/Button";

type ButtonType = ButtonProps & {
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const PButton = ({ children, ...props }: ButtonType) => {
  return <Button {...props}>{children}</Button>;
};

export default PButton;
