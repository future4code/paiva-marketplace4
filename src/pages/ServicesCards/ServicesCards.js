import React from "react"
import styled from "styled-components";


const ServiceCardContainer = styled.div`
   display: flex;
   flex-direction: row;
`
const ServiceCardInternalContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 10px;
   border: 1px solid purple;
   width: 260px;
   height:230px;
   padding: 10px;
   text-align: center;
`
export default function ServicesCards(props) {
    return (
        <ServiceCardContainer>
            <ServiceCardInternalContainer >
                <h3>{props.title}</h3>
                <h3>R${props.price},00</h3>
                <p>{props.description}</p>
                <button onClick={() => props.changePage("sellPage")}>Contratar</button>
            </ServiceCardInternalContainer >
            <ServiceCardInternalContainer >
                <h3>{props.title}</h3>
                <h3>R${props.price},00</h3>
                <p>{props.description}</p>
                <button onClick={() => props.changePage("sellPage")}>Contratar</button>
            </ServiceCardInternalContainer >
            <ServiceCardInternalContainer >
                <h3>{props.title}</h3>
                <h3>R${props.price},00</h3>
                <p>{props.description}</p>
                <button onClick={() => props.changePage("sellPage")}>Contratar</button>
            </ServiceCardInternalContainer >
        </ServiceCardContainer>
    )
}