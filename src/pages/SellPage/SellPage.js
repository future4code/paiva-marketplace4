import React from 'react'
import styled from 'styled-components';
import ServicesCards from '../ServicesCards/ServicesCards';


const SellPageContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

export default class SellPage extends React.Component {

    state = {
        services: [
            {
                "id": "efed9385-cf87-4f0e-a121-465384b3f2e4",
                "title": "Cortar a grama",
                "description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
                "price": 40,
                "paymentMethods": [
                    "PayPal",
                    "boleto"
                ],
                "dueDate": "2021-12-30T00:00:00.000Z",
                "taken": false
            }
        ]
    };

    render() {
        const services = this.state.services.map(service => {
            return <ServicesCards
                key={service.id}
                changePage={this.props.changePage}
                title={service.title}
                price={service.price}
                description={service.description}
            />
        })

        return (
            <SellPageContainer >
                {services}
            </SellPageContainer >
        )
    };
};