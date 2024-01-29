import React from "react";

export default function Card({card}) {
    return(
        <div className="card">
            <img src={card.imageUrl} alt={card.title} className="card-img"/>
            <div className="cards-container">
                <img
                    src="../images/location-pin.png"
                    alt="location-pin"
                    className="loc-icon"
                />
                <span className="loc-name"> {card.location.toUpperCase()} </span>
                <a href={card.googleMapsUrl} className="loc-google">
                    {" "}
                    View on Google Maps{" "}
                </a>
                <h1 className="card-title"> {card.title} </h1>
                <p className="card-date">
                    <strong>
                        {" "}
                        {card.startDate} - {card.endDate}{" "}
                    </strong>
                </p>
                <p className="card-description"> {card.description} </p>
            </div>
        </div>
    )
}