type ButtonProps = {
  onClick?: () => void;
  buttonType?: "" | "secondary";
  children: React.ReactNode | string;
};

export default function Button({ onClick, buttonType, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === "secondary" ? "btn--secondary" : ""}`}
    >
      {children}
    </button>
  );
}
