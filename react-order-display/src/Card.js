import React from "react";

const Card = ({ id, received, status, service }) => {
    return (
        <div className='tc bg-washed-green dib br3 pa3 ma2 ml4 mt3 grow bw2 shadow-5'>
            <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{id}</h2>
                <p>{received}</p>
                <p>{status}</p>
                <p>{service}</p>
            </div>
        </div>
    );
}

export default Card;