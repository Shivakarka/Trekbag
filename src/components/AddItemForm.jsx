import Button from "./Button"

const AddItemForm = () => {
  return (
    <form>        
        <label htmlFor="item" className="item-label"><strong>Add an item</strong></label>
        <input type="text" id="item" name="item" autoFocus />
        <Button>Add to list</Button>
    </form>
  )
}

export default AddItemForm