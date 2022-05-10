import React from 'react'
import './Modal.css'

export default function Modal(props) {
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
                <p>Table with order items.</p>
            </section>
            <section className="footer">
                <button id="cancelButton" onClick={() => props.closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </section>
        </div>
    </div>
  )
}

