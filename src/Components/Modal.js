import React, { useRef } from 'react'
import './Modal.css'

export default function Modal(props) {
    const qtyInputRef = useRef();

      const orders = props.orders.map((order) =>
        <tr key={order.id}>
            <td className="tableDataImg"><img className="orderImage" src={order.image} alt="Beer" /></td>
            <td>{order.name.length > 8 ? order.name.substring(0, 8) + "..." : order.name}</td>
            <td>${order.price}</td>
            <td><input type="number" value="1" ref={qtyInputRef} onChange={() => {}}></input></td>
        </tr>
      );

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
                    <tbody>
                        {orders}
                    </tbody>
                </table>
                </section>
                <section className="footer">
                    <button id="cancelButton" onClick={() => props.closeModal(false)}>Cancel</button>
                    <button>Continue</button>
                </section>
            </div>
        </div>
    )
}

