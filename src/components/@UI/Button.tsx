import style from "@/styles/UI/Button.module.scss";
const Button = ({
  variant,
  text,
}: {
  variant: "black" | "white";
  text: string;
}) => {
  return (
    <button className={variant === "white" ? style.btn : style.btn2}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
