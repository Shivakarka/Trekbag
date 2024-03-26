import { secondaryButtons } from "../lib/constants";
import Button from "./Button";

const ButtonGroup = () => {
  return (
    <section className="button-group">
      {secondaryButtons.map((buttonText, index) => (
        <Button key={index} buttonType="secondary">
          {buttonText}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
