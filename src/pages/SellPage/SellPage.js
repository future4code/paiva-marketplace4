import React from 'react';
import axios from 'axios';
import ServicesCards from '../ServicesCards/ServicesCards';
import { axiosConfig, baseUrl } from '../constants/constants';
import Filter from '../Filter/Filter';
import { Grid } from "@material-ui/core";



export default class SellPage extends React.Component {

    state = {
        jobs: []
    };

    componentDidMount = () => {
        this.getServices()
    }

    getServices = () => {
        axios.get(baseUrl, axiosConfig)
            .then(response => {
                this.setState({ jobs: response.data.jobs })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {

        const services = this.state.jobs.map(service => {
            return (
                <Grid container spacing={1} justify='center' direction="row"
                    alignItems="center" marginTop={60} height={200} gridTemplateColumns="repeat(4, 24.8% 0.2%)">
                    <Grid item key={service.id} xs={12} sm={6} md={4} lg={3}>
                        <ServicesCards changePage={this.props.changePage}
                            serviceId={service.id}
                            title={service.title}
                            price={service.price}
                            description={service.description} />
                    </Grid>
                </Grid>
            )
        })

        return (
            <div>
                <Filter count={this.state.jobs.length} />
                {services}
            </div>
        )
    };
};


