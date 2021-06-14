import React from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../../constants/constants';
import Filter from '../../components/Filter/Filter';
import ServicesCards from '../../components/ServicesCards/ServicesCards';


export default class SellPage extends React.Component {

    state = {
        min: "",
        max: "",
        name: "",
        order: 'maior',
        jobs: []
    }

    componentDidMount = () => { this.getServices() }

    getServices = () => {
        axios.get(baseUrl, axiosConfig)
            .then(res => {
                this.setState({ jobs: res.data.jobs })

                const orderedList = this.state.jobs
                    .filter((job) => this.state.max ? job.price <= this.state.max : true)
                    .filter((job) => this.state.min ? job.price >= this.state.min : true)
                    .filter((job) => this.state.name ? job.title.toLowerCase().includes(`${this.state.name.toLowerCase()}`) : true)
                    .sort((a, b) =>
                        this.state.order === "menor" ? a.price - b.price : b.price - a.price
                    );
                this.setState({ jobs: orderedList })

            }).catch(err => {
                alert('Ocorreu um erro. Tente novamente!')
            })
    }

    onChangeMin = (e) => { this.setState({ min: e.target.value }) };

    onChangeMax = (e) => { this.setState({ max: e.target.value }) };

    onChangeName = (e) => { this.setState({ name: e.target.value }) };

    toOrder = (e) => {
        this.setState({ order: e.target.value })
        this.getServices()
    }

    toUpdate = () => { this.getServices() }

    render() {
        return (
            <div>
                <Filter
                    onChangeMin={this.onChangeMin}
                    onChangeMax={this.onChangeMax}
                    onChangeName={this.onChangeName}
                    toOrder={this.toOrder}
                    toUpdate={this.toUpdate}
                    name={this.state.name}
                    min={this.state.min}
                    max={this.state.max}
                />
                <ServicesCards
                    name={this.state.name}
                    min={this.state.min}
                    max={this.state.max}
                    changePage={this.props.changePage}
                    jobs={this.state.jobs}
                />
            </div>
        )
    }
}

