import React from 'react'

export default function Modal() {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button>&times;</button>
            <section className="title">
                <h1>Confirm Order</h1>
            </section>
            <section className="body">
                <p>Table with order items.</p>
            </section>
            <section className="footer">
                <button>Cancel</button>
                <button>Continue</button>
            </section>
        </div>
    </div>
  )
}

