import Button from "./Button"

const ButtonGroup = () => {

    const secondaryButtons = [
        "Mark all as complete",
        "Mark all as incomplete",
        "Reset to initial",
        "Remove all items"
    ];

  return (
    <section className="button-group">
        {secondaryButtons.map((buttonText, index) => (
            <Button key={index} buttonType="secondary">{buttonText}</Button>
        ))}
    </section>
  )
}

export default ButtonGroup