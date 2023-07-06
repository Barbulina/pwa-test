const button = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return <button onClick={handleClick}>{children}</button>;
};

export default button;
