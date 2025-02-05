import { Schema, model } from "mongoose";

const inventorySchema = new Schema({
  name: String,
  category: String,
  quantity: Number,
});

export default model("Inventory", inventorySchema);
