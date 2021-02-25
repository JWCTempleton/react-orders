import React from "react";
import Card from "./Card";

const CardList = ({ orders }) => {
    return (
        <div>
            {orders.map((order, i) => {
                return <Card
                    key={i}
                    id={orders[i].OrderID}
                    received={orders[i].DateReceived}
                    status={orders[i].OrderStatus} />
            })}
        </div>
    )
}
export default CardList;