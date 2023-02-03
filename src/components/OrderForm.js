import React, { useState } from "react";

function OrderForm() {
  const [orderItems, setOrderItems] = useState([
    { itemName: "", itemQuantity: 0 }
  ]);

  const addItem = () => {
    setOrderItems([...orderItems, { itemName: "", itemQuantity: 0 }]);
  };

  const removeItem = index => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  const handleItemNameChange = (index, event) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index].itemName = event.target.value;
    setOrderItems(newOrderItems);
  };

  const handleItemQuantityChange = (index, event) => {
    const newOrderItems = [...orderItems];
    newOrderItems[index].itemQuantity = event.target.value;
    setOrderItems(newOrderItems);
  };

  return (
    <div>
      <h2>Order Form</h2>
      {orderItems.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Item Name"
            value={item.itemName}
            onChange={event => handleItemNameChange(index, event)}
          />
          <input
            type="number"
            placeholder="Item Quantity"
            value={item.itemQuantity}
            onChange={event => handleItemQuantityChange(index, event)}
          />
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}

export default OrderForm;