import React from 'react'

export default function Modal(props) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button onClick={() => props.closeModal(false)}>&times;</button>
            <section className="title">
                <h1>Confirm Order</h1>
            </section>
            <section className="body">
                <p>Table with order items.</p>
            </section>
            <section className="footer">
                <button onClick={() => props.closeModal(false)}>Cancel</button>
                <button>Continue</button>
            </section>
        </div>
    </div>
  )
}

