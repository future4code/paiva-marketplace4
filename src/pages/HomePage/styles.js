import styled from 'styled-components';


export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 90vw;
    height: 50vh;
    margin-top: 7rem;
    margin-left: 3.5rem;
    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;        
        img{
          display: none;
        }
    }
`