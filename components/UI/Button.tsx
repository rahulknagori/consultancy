interface Props {
  variant: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, onClick, variant }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={variant ? variant : "bg-indigo-600 text-white"}
    >
      {children}
    </button>
  );
};

export default Button;
