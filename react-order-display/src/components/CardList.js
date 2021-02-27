import React from "react";
import Card from "./Card";

const CardList = ({ orders }) => {
    return (
        <div>
            {orders.map((order, i) => {
                return <Card
                    key={i}
                    id={orders[i].id}
                    name={orders[i].name}
                    email={orders[i].email}
                    address={orders[i].address.street} />
            })}
        </div>
    )
}
export default CardList;