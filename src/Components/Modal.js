import React, { useState, useEffect } from "react";
import "./Modal.css";

export default function Modal(props) {
  const [listWithQuantity, setListWithQuantity] = useState(props.orders.map((order) => {
    return { ...order, quantity: 1 };
  }));
  const [total, setTotal] = useState(0);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    getSum()  
  })

  const getSum = () => {
    const newListWithQuantity = [...listWithQuantity];
    const initialvalue = 0;
    const calculatedTotal = newListWithQuantity.reduce(
        (calculatedTotal, currentValue) => calculatedTotal + 
                                         (currentValue.price * currentValue.quantity),
        initialvalue
    );

    setTotal(calculatedTotal);
  }

  const handleQuantityChange = (e) => {
    if (e.target.value < 1){ e.target.value = 1};

    const quantity = e.target.value;
    const newListQuantity = [...listWithQuantity];

    const targetOrder = newListQuantity.find((order) => order.id === 
                        e.target.attributes[0].value);

        setListWithQuantity(newListQuantity.map(order => {
        if (order.id === targetOrder.id) {
            return {...order, quantity: quantity };
        }
        return order;
    }))
  }

  const handleItemRemoval = (id) => {

    setListWithQuantity(listWithQuantity.filter(item => item.id !== id));
  }

  const orders = listWithQuantity.map((orderItem) => (
    <tr key={orderItem.id}>
      <td className="tableDataImg">
        <img className="orderImage" src={orderItem.image} alt="Beer" />
      </td>
      <td>
        {orderItem.name.length > 8
          ? orderItem.name.substring(0, 8) + "..."
          : orderItem.name}
      </td>
      <td>${orderItem.price}</td>
      <td>
        <input
          data-key={orderItem.id}
          type="number"
          min="1"
          required
          value={orderItem.quantity}
          onChange={(e) => handleQuantityChange(e)}
        />
      </td>
      <td><button className="remove" title="Checkout" onClick={() => handleItemRemoval(orderItem.id)}>&#10006;</button></td>
    </tr>
  ));

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <section className="close">
          <button onClick={() => props.closeModal(false)}>&times;</button>
        </section>
        <section className="title">
          { !isConfirmed &&
            <h1>Confirm Order</h1>
          }
          { isConfirmed &&
            <h1>Order Confirmed! 🍻</h1>
          }
        </section>
        <section className="body">
            { !isConfirmed && 
                <table>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{orders}</tbody>
                </table>
            }
        </section>
        <section className="total"><strong>Total: </strong>${Math.round(total * 100) / 100}</section>
        <section className="footer">
          { !isConfirmed && 
            <button id="cancelButton" onClick={() => props.closeModal(false)}>
                Cancel
            </button>
          }
          { !isConfirmed &&
            <button onClick={() => {setIsConfirmed(true); props.setOrders([]);}}>Confirm</button>
          }
        </section>
      </div>
    </div>
  );
}
