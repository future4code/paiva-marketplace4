import styled from 'styled-components';


export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90vw;
    height: 100vh;
    margin-top: 12rem;
    margin-left: 4rem;
    margin-bottom:0.2rem;
    @media(max-width: 800px) {
        display:flex;
        flex-direction: column;               
        img{
          display: none;
        }
    }
`