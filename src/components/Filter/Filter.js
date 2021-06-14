import React from 'react';
import { FilterContainer } from './styles';
import { Button, MenuItem, InputLabel, Select } from '@material-ui/core';

export default class Filter extends React.Component {

    render() {
        return (
            <div>
                <FilterContainer>
                    <div>
                        <InputLabel size='small' id="label">Ordenar</InputLabel>
                        <Select onChange={this.props.toOrder}>
                            <MenuItem value="maior">Maior valor</MenuItem>
                            <MenuItem value="menor">Menor valor</MenuItem>
                        </Select>
                    </div>
                    <div>
                        <input placeholder={'Valor mínimo'}
                            type="number" value={this.props.min} onChange={this.props.onChangeMin}
                        />
                        <input placeholder={'Valor máximo'}
                            type="number" value={this.props.max} onChange={this.props.onChangeMax}
                        />
                        <input placeholder={'Serviço'}
                            type='text' value={this.props.name} onChange={this.props.onChangeName}
                        />
                        <Button type='submit' color="secondary" size="small"
                            onClick={this.props.toUpdate}>Filtrar
                        </Button>
                    </div>
                </FilterContainer>
            </div >
        )
    }
}
