import React from 'react'
import axios from 'axios'
import { ServiceRegisterContainer } from './styles'
import { ServiceRegisterForm } from './styles'
import Footer from '../Footer/Footer'
import ServicesCard from '../ServicesCards/ServicesCards'
import { axiosConfig, baseUrl } from '../constants/constants'


export default class RegisterPage extends React.Component {

    state = {
        title: "",
        description: "",
        price: "",
        paymentMethods: JSON.stringify(['', '']),
        dueDate: "",
    }

    changeTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    changeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    changePrice = (e) => {
        this.setState({ price: e.target.value })
    }

    changePaymentMethods = (e) => {
        this.setState({ paymentMethods: e.target.value })
    }

    changeDueDate = (e) => {
        this.setState({ dueDate: e.target.value })
    }

    registerService = (event) => {
        event.preventDefault()
        const body = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price,
            paymentMethods: this.state.paymentMethods,
            dueDate: this.state.dueDate
        }

        axios.post(baseUrl, body, axiosConfig)
            .then(() => {
                alert('Oferta de serviço cadastrada com sucesso')
            }).catch(err => {
                alert(err.response.data)
                console.log(err.response.data)
            })

        this.setState({
            title: "",
            description: "",
            price: "",
            paymentMethods: [],
            dueDate: ""
        })
    }

    render() {

        return (
            <ServiceRegisterContainer>
                <h4><em>Conquiste clientes pelo celular e aumente sua renda</em></h4>
                <h2> <em>Cadastre-se já e veja todos os serviços que estão disponíveis para você!</em></h2>

                <ServiceRegisterForm>
                    <label>Qual serviço você deseja ofertar?</label>
                    <input
                        placeholder="Ex.: Aula"
                        type="text"
                        value={this.state.title}
                        onChange={this.changeTitle}
                    />

                    <label>Descreva o serviço brevemente:</label>
                    <textarea
                        placeholder="Ex.: Aulas de piano"
                        type="text"
                        value={this.state.description}
                        onChange={this.changeDescription}
                    />

                    <label>Valor do serviço:</label>
                    <input
                        placeholder="Ex.: 400"
                        value={this.state.price}
                        onChange={this.changePrice}
                    />

                    <label>Método de pagamento:</label>
                    <select
                        placeholder="Forma de pagamento"
                        value={this.state.paymentMethods}
                        onChange={this.changePaymentMethods}>
                        <option value="PayPal">Paypal</option>
                        <option value="boleto">Boleto</option>
                    </select>

                    <label>Data de vencimento da publicação:</label>
                    <input
                        placeholder="AAAA-MM-DD"
                        value={this.state.dueDate}
                        onChange={this.changeDueDate}
                    />

                    <button type="submit" onClick={this.registerService}>Cadastrar serviço</button>
                </ServiceRegisterForm>
            </ServiceRegisterContainer>
        )
    }
};

