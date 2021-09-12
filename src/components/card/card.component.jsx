import React from 'react';
import './card.style.scss';



const Card = (props) => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&bgset=bg1&size=180x180`} alt="Monster" />
        <h1>{props.monster.name}</h1>
        <span>{ props.monster.email}</span>
        <span>{ props.monster.phone}</span>
        <h6>@ { props.monster.address.city}</h6>
    </div>
)
export default Card;