import styled from 'styled-components'


export const ContainerServiceRegister = styled.div`
    display: flex;    
    width: 100vw;
    height:100vh;
    margin-top:3rem;
    @media(max-width: 800px) {
        display:flex;
        flex-direction: column;            
        img{
          display: none;
        }
    }  
`

export const ServiceRegisterArea = styled.div`   
    width:70vw;
    height:70vh;       
    margin-left: 7rem;
    margin-top: 8rem;
    text-align: center;
    h3{
        margin-top: 1rem;
    }     
`

export const TextoArea = styled.div`
   width:36vw;
   color: #505050;
   padding:12px;
   margin-left:10%;
`

export const ServiceRegisterForm = styled.form`
   position: absolute;
   width: 30px;
   margin-left:10%;
`

export const InternalForm = styled.fieldset`
    width: 340px;
    height: 280px;
`

export const LabelName = styled.label`
    position: absolute;
    left: 19px;
    margin-right: 6px;
`

export const InputFormName = styled.input`
    position: absolute;
    left: 95px;
    top: 23px;
    width: 222px;
`

export const InputFormPrice = styled.input`
    position: absolute;
    left: 95px;
    margin-top: 2px;
    width: 222px;
`

export const InputFormPayment = styled.input`
    position: absolute;
    left: 95px;
    margin-top: 2px;
    width: 210px;
    margin-left: 12px;
`
export const InputFormDue = styled.input`
    position: absolute;
    left: 95px;
    margin-top: 2px;
    width: 209px;
    margin-left: 15px;
`

export const ContainerImagens = styled.div`
   position: relative;
   width: 100%; 
   top: 5%;      
`

export const ContainerImagem = styled.div`
  padding: 0;
  margin:0;
`

export const ImagemService = styled.img`
  position: absolute;
  left: 8%;
  top: 22%;
  bottom:0.2rem;
  width: 60%; 
  z-index: -1;
`
