import styled from 'styled-components';


export const ContainerCartPage = styled.div`
    display:flex;
    flex-direction:column;
    width: 45vw;
    min-height: 65vh;
    align-items: center;
    justify-content:space-between;
    padding:10px;
    margin: auto;
    margin-top:12%;
    border: 1px solid grey;
    color: #505050;
    table{
        text-align:center;
        padding:6px;
    
    }
    @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
    }
`

