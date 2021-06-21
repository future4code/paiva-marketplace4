import styled from 'styled-components';


export const FilterContainer = styled.div`
display:flex;  
padding: 10px;
justify-content: space-between;
margin-top:7rem;
margin-left:4rem;
margin-right:6rem; 
width:80vw;
label{
  color:#505050;
  font-size: 13px;
}  
@media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`