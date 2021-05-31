import React, { Component } from 'react'
import { FilterContainer } from './styles'
import { FilterDiv } from './styles'

export default class Filter extends Component {
    render() {
        return (
            <FilterContainer className="filter">
                <FilterDiv className='filter-result'>{this.props.count} Serviços</FilterDiv >
                <FilterDiv className='filter-sort'>

                    <select>
                        <option value="">ORDENAR</option>
                        <option value="crescente">CRESCENTE</option>
                        <option value="decrescente">DECRESCENTE</option>
                    </select>
                </FilterDiv >
                <FilterDiv className='filter-size'>

                    <select>
                        <option value="">CATEGORIAS</option>
                        <option value="aulas">AULAS DE IDIOMAS</option>
                        <option value="webdesigner">WEB DESIGNER</option>
                        <option value="decoracao">DECORAÇÃO</option>
                    </select>
                </FilterDiv >
                <hr />
            </FilterContainer>
        )
    }
}
