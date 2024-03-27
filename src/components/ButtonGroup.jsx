import Button from "./Button";

const ButtonGroup = ({
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) => {
  const secondaryButtons = [
    {
      text: "Remove all",
      onClick: handleRemoveAllItems,
    },
    {
      text: "Reset to initial",
      onClick: handleResetToInitial,
    },
    {
      text: "Mark all as complete",
      onClick: handleMarkAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: handleMarkAllAsIncomplete,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button, index) => (
        <Button key={index} buttonType="secondary" onClick={button.onClick}>
          {button.text}
        </Button>
      ))}
    </section>
  );
};

export default ButtonGroup;
