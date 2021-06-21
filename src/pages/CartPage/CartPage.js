import React from 'react';
import axios from 'axios';
import CartItem from '../../components/CartItem/CartItem'
import { ContainerCartPage } from './styles';
import { axiosConfig, baseUrl } from '../../constants/constants';
import { Button } from '@material-ui/core';
import ServicesCards from '../../components/ServicesCards/ServicesCards';


export default class CartPage extends React.Component {

    state = {
        jobsInCart: []
    };

    componentDidMount() {
        this.getAllJobs();
    }

    getAllJobs = async () => {
        try {
            const res = await axios.get(baseUrl, axiosConfig);
            this.setState({ jobsInCart: res.data.jobs });

        } catch (error) {
            alert(error);
        }
    };

    removeJob = (jobId) => {
        const body = {
            taken: false
        };
        axios
            .post(`${baseUrl}/${jobId}`, body, axiosConfig)
            .then((res) => {
                alert('Serviço removido');
                this.getAllJobs();
            })
            .catch((err) => {
                alert('Erro! Tente novamente');
            });
    };

    removeAll = () => {
        this.state.jobsInCart.forEach((job) => {
            if (job.taken === true) {
                this.removeJob(job.id)
            }
        })
    }

    render() {
        const jobsInCart = this.state.jobsInCart.filter((jobCart) => {
            if (jobCart.taken === true) {
                return true;
            }
        });

        const services = jobsInCart.map((service) => {

            let num = Math.floor(Math.random() * 100 + 1)

            return (
                <tr>
                    <td>
                        <p>{service.title}</p>
                    </td>
                    <td>
                        <p>R$ {service.price},00</p>
                    </td>
                    <td>
                        <Button size="small" color="secondary" variant="contained" onClick={() => this.removeJob(service.id)} type="submit">Remover item</Button>
                    </td>
                </tr>
            );
        });

        const Total = jobsInCart.reduce((prevVal, elem) => prevVal + elem.price, 0)

        { <ServicesCards count={this.jobsInCart && this.jobsInCart.length} /> }

        return (
            <ContainerCartPage>
                <div>
                    <h4>Serviços selecionados</h4>
                </div>
                <table>
                    <tr>
                        <th>Serviço</th>
                        <th>Preço unitário</th>
                    </tr>
                    <tbody>
                        {jobsInCart.length ? services : <div>Seu carrinho está vazio</div>}
                    </tbody>
                </table>
                <div>
                    <Button size="small" color="secondary" variant="contained" onClick={this.removeAll}>Remover todos os serviços</Button>
                </div>
                {<CartItem
                    Total={Total}
                    removeAll={this.removeAll}
                />}
            </ContainerCartPage>

        );
    }
}



