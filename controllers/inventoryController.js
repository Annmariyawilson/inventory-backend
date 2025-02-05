import Inventory, { find, findByIdAndUpdate, findByIdAndDelete } from "../models/Inventory";

// Get all items
const getAllItems = async (req, res) => {
  try {
    const items = await find();
    res.json(items);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Add new item
const addItem = async (req, res) => {
  try {
    const { name, category, quantity } = req.body;
    const newItem = new Inventory({ name, category, quantity });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Edit item
const editItem = async (req, res) => {
  const { id } = req.params;
  const { name, category, quantity } = req.body;
  
  try {
    const updatedItem = await findByIdAndUpdate(id, { name, category, quantity }, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Delete item
const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await findByIdAndDelete(id);
    res.json({ msg: "Item deleted" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

export default { getAllItems, addItem, editItem, deleteItem };
