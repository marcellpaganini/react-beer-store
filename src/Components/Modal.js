import React, { useState, useEffect } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [listWithQuantity, setListWithQuantity] = useState(props.orders.map((order) => {
    return { ...order, quantity: 1 };
  }));

  const handleQuantityChange = (e) => {
    const quantity = e.target.value;
    const targetOrder = listWithQuantity.find((order) => order.id === 
                        e.target.attributes[0].value);

        setListWithQuantity(listWithQuantity.map(order => {
        if (order.id === targetOrder.id) {
            return [{...order, quantity: quantity }];
        }
        return order;
    }))
  }

  const orders = listWithQuantity.map((order) => (
    <tr key={order.id}>
      <td className="tableDataImg">
        <img className="orderImage" src={order.image} alt="Beer" />
      </td>
      <td>
        {order.name.length > 8
          ? order.name.substring(0, 8) + "..."
          : order.name}
      </td>
      <td>${order.price}</td>
      <td>
        <input
          data-key={order.id}
          type="number"
          min="1"
          value={order.quantity}
          onChange={(e) => handleQuantityChange(e)}
        />
      </td>
    </tr>
  ));

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <section className="close">
          <button onClick={() => props.closeModal(false)}>&times;</button>
        </section>
        <section className="title">
          <h1>Confirm Order</h1>
        </section>
        <section className="body">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>{orders}</tbody>
          </table>
        </section>
        <section className="footer">
          <button id="cancelButton" onClick={() => props.closeModal(false)}>
            Cancel
          </button>
          <button>Confirm</button>
        </section>
      </div>
    </div>
  );
}
