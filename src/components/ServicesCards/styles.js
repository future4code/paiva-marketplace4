import styled from 'styled-components';


export const CardBlock = styled.ul`
  display: inline-flex; 
  justify-items: center; 
  height: 42vh; 
  width: 30vw;
  margin: 0.1rem;
  padding:0;  
  margin-top: 1rem;
  margin-bottom:-10.5rem; 
  @media(max-width: 800px) {
    display:flex;
    flex-direction: column;
    position: relative;
  }
`
export const CardContainer = styled.li`
  list-style-type: none;
  padding: 0;   
  height:10rem;   
  margin-left:5.5rem;  
`
export const CardServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #E5E3EF;  
  border-radius: 8px;  
  padding: 1rem;
  box-shadow: 0 4px 8px 0 #E8E8E8;
  color: #505050;
  text-align: center;
  background-color: #F3F3FB;
  width: 15rem; 
  height: 10rem;   
`

export const IconContainer = styled.div`
   margin-left: 68rem;
`