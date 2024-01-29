import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";
export default function App() {
    const cards = data.map((card) => {
        return <Card key={card.id} card={card} />
    })
    return(
        <div>
            <Navbar />
            <section className="card-container">{cards}</section>
        </div>
    )
}