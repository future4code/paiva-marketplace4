import React from 'react';
import axios from "axios";
import styled from 'styled-components';


const ServiceRegisterContainer = styled.div`
    width:30vw;
    height:40vh;
    display: flex;
    flex-direction: column;
    align-items: start;   
    margin-left: 50px;
    margin-top: -650px;
    text-align: center;        
`

const ServiceRegisterForm = styled.form`       
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: center;  
    margin: auto;
    padding: 0;   
    height:22vh;
    justify-content:space-around
   `

export default class RegisterPage extends React.Component {

    state = {
        tituloServico: "",
        descricaoServico: "",
        valorServico: "",
        metodoPagamento: "",
        dataVencimento: ""
    }

    alteraTituloServico = (event) => {
        this.setState({ tituloServico: event.target.value })
    }

    descricaoServico = (event) => {
        this.setState({ descricaoServico: event.target.value })
    }

    valorServico = (event) => {
        this.setState({ valorServico: event.target.value })
    }

    metodoPagamento = (event) => {
        this.setState({ metodoPagamento: event.target.value })
    }
    dataVencimento = (event) => {
        this.setState({ dataVencimento: event.target.value })
    }

    registerService = (event) => {
        event.preventDefault();
        const body = {
            title: this.state.tituloServico,
            description: this.state.descricaoServico,
            price: this.state.valorServico,
            paymentMethods: this.state.metodoPagamento,
            dueDate: this.state.dataVencimento
        };

        axios.post("https://labeninjas.herokuapp.com/jobs",
            body, {
            header: {
                Authorization: "291b2d5d-77e2-402f-8bbb-635e73274daf"
            }
        })
            .then(() => {
                alert('Cadastrado com sucesso')
            }).catch((err) => [
                alert('Ocorreu um erro! Tente novamente'),
                console.log(err)
            ]);
        this.setState({
            tituloServico: "",
            descricaoServico: "",
            valorServico: "",
            metodoPagamento: "",
            dataVencimento: ""
        });
    };

    render() {
        /*const {classes} = useStyles();*/
        return (
            <ServiceRegisterContainer>
                <h4><em>Conquiste clientes pelo celular e aumente sua renda</em></h4>
                <h2> <em>Cadastre-se já e veja todos os serviços que estão disponíveis para você!</em></h2>

                <ServiceRegisterForm onSubmit={this.cadastrarServico}>
                    <select id="opcoes" name="listaopcoes" form="opcoesformulario">
                        <option value="" disabled selected>Escolha sua categoria</option>
                        <option value="opcao1">Categoria 1</option>
                        <option value="opcao2">Categoria 2</option>
                        <option value="opcao3">Categoria 3</option>
                        <option value="opcao4">Categoria 4</option>
                        <option value="opcao5">Categoria 5</option>
                        <option value="opcao6">Categoria 6</option>
                        <option value="opcao7">Categoria 7</option>
                        <option value="opcao8">Categoria 8</option>
                        <option value="opcao9">Categoria 9</option>
                        <option value="opcao10">Categoria 10</option>
                    </select>

                    <label>Descreva seu serviço brevemente:</label>
                    <textarea
                        placeholder="Comece por aqui"
                        type="text"
                        value={this.state.descricaoServico}
                    />

                    <label>Valor do seu serviço:</label>
                    <input
                        placeholder="R$ 0,00"
                        type="number"
                        value={this.state.valorServico}
                    />

                    <select id="options" name="payments" form="paymentsoptions">
                        <option value="" disabled selected>Escolha seu método de pagamento</option>
                        <option value="paypal">Paypal</option>
                        <option value="credito">Cartão de crédito</option>
                    </select>
                    <button type="submit" onClick={this.registerService}>Cadastrar serviço</button>
                </ServiceRegisterForm>
            </ServiceRegisterContainer>
        );
    };
};
