import React from 'react'
import './Style.css'
import Header from '../../components/Header'

export default function index () {
    return (
        <>
            <Header />
            <div style={{
                textAlign: "center", padding: "40px 0", background: "#EBF0F5"
            }}>
                <div class="card-success">
                    <div style={{ borderRadius: "200px", height: "200px", width: "200px", background: "#F8FAF5", margin: "0 auto" }}>
                        <i class="i-success checkmark">✓</i>
                    </div>
                    <h1 className='h1-success'>Success</h1>
                    <p className='p-success'>Order Confirmed</p>
                </div>
            </div>
        </>
    )
}
