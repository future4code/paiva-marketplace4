import { Button } from "@material-ui/core";
import React from "react";
import { ContainerItem } from "./styles";


export default class CartItem extends React.Component {

    finalizeButton = () => {
        this.props.removeAll()
        this.finalized()
    }

    finalized = () => {
        return window.confirm("Contratação finalizada com sucesso!")
    }

    render() {
        return (
            <ContainerItem>
                <div><bold>Total:</bold> R${this.props.Total},00</div><br />
                <form>
                    <label>Forma de pagamento:</label>
                    <select>
                        <option value="boleto">Boleto</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </form><br />
                <Button size="small" color="secondary" variant="contained" justify='center' onClick={this.finalizeButton}>Finalizar contratação</Button>
            </ContainerItem>
        );
    }
}