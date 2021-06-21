import React from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { axiosConfig, baseUrl } from '../../constants/constants';
import {
    ServiceRegisterForm, ServiceRegisterArea, TextoArea, ContainerImagens,
    InternalForm, LabelName, InputFormName, InputFormPrice, InputFormPayment, ImagemService,
    InputFormDue, ContainerServiceRegister, ContainerImagem
} from './styles';


export default class RegisterPage extends React.Component {

    state = {
        title: "",
        description: "",
        price: "",
        paymentMethods: "",
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
            "title": this.state.title,
            "description": this.state.description,
            "price": Number(this.state.price),
            "paymentMethods": [this.state.paymentMethods],
            "dueDate": this.state.dueDate,
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
            paymentMethods: "",
            dueDate: "",
        })
    }

    render() {
        return (
            <ContainerServiceRegister>
                <ServiceRegisterArea>
                    <TextoArea>
                        <p><em>Conquiste clientes e aumente sua renda</em></p><br />
                        <h4><em>Cadastre-se já e veja todos os serviços que estão disponíveis para você!</em></h4><br />
                    </TextoArea>
                    <ServiceRegisterForm>
                        <InternalForm>
                            <legend>Qual serviço você deseja ofertar?</legend>
                            <LabelName>Serviço:</LabelName>
                            <InputFormName type="text" value={this.state.title} onChange={this.changeTitle} /><br />

                            <LabelName>Descrição:</LabelName><br />
                            <textarea cols="35" rows="4" type="text" value={this.state.description} onChange={this.changeDescription}></textarea><br />

                            <LabelName>Preço:</LabelName>
                            <InputFormPrice type="text" value={this.state.price} onChange={this.changePrice} /><br /><br />

                            <LabelName>Pagamento:</LabelName>
                            <InputFormPayment placeholder='Boleto ou PayPal' value={this.state.paymentMethods}
                                onChange={this.changePaymentMethods} /><br /><br />

                            <LabelName>Vencimento:</LabelName>
                            <InputFormDue placeholder="AAAA-MM-DD"
                                value={this.state.dueDate}
                                onChange={this.changeDueDate}
                            /><br /><br />
                            <Button color="secondary" variant="contained" size="small" type="submit" onClick={this.registerService}>Cadastrar</Button>
                        </InternalForm>
                    </ServiceRegisterForm>
                </ServiceRegisterArea>
                <ContainerImagens>
                    <ContainerImagem className='imagem-engenheira'>
                        <ImagemService src='./images/engenheiracivil.png' alt='engenheira civil' />
                    </ContainerImagem>
                </ContainerImagens>
            </ContainerServiceRegister >
        )
    }

};