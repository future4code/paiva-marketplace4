import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CardBlock, CardContainer, CardServices, IconContainer } from './styles';
import { Button, Typography, Badge } from '@material-ui/core';
import CartPage from '../../pages/CartPage/CartPage';
import { axiosConfig, baseUrl } from '../../constants/constants';
import axios from 'axios';

export default class ServicesCards extends React.Component {

    updateJob = (jobId) => {
        const body = {
            taken: true
        };
        axios
            .post(`${baseUrl}/${jobId}`, body, axiosConfig)
            .then((res) => {
                alert('Serviço adicionado ao carrinho');
                this.props.getAllJobs();
            })
            .catch((err) => {
                alert('Clique no ícone para finalizar a contratação!')
            })
    }

    render() {
        <CartPage changePage={this.props.changePage}
            jobs={this.props.state && this.props.state.jobs}
            jobsInCart={this.props.state && this.props.state.jobsInCart}
        />
        const services = this.props.jobs ? this.props.jobs.map(job => {
            return (
                <CardBlock>
                    <CardContainer>
                        <CardServices key={job.id} job={job}>
                            <Typography><h4>{job.title} | R${job.price}</h4></Typography>
                            <Typography>{job.description}</Typography>
                            <Button size="small" color="secondary" variant="contained" style={{ maxWidth: '90px', left: '54px' }} onClick={() => this.updateJob(job.id)}>Adicionar</Button>
                        </CardServices>
                    </CardContainer>
                </CardBlock>
            );
        }) : <div>Carregando...</div>

        return (
            <div>
                <IconContainer onClick={() => this.props.changePage("cartPage")} >
                    <Badge badgeContent={1} color='secondary'>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconContainer>
                {services}
            </div>
        )
    }
}