import styled from 'styled-components'


export const ContainerServiceRegister = styled.div`
    display: flex;    
    width: 100vw;
    height:80vh;
    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;        
        img{
          display: none;
        }
    }  
`

export const ServiceRegisterArea = styled.div`   
    width:70vw;
    height:70vh;       
    margin-left: 5rem;
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
`

export const ServiceRegisterForm = styled.form`
   position: absolute;
   display: block;
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

export const ContainerPrimeiraImagem = styled.div`
  padding: 0;
  margin:0;
`

export const ImagemServicePage = styled.img`
  margin-top:65%; 
  padding-right: 2%; 
  width: 70%;
`

export const ContainerSegundaImagem = styled.div`
   padding:0;
   margin:0;
`
export const ImagemService = styled.img`
  position: absolute;
  right: 0;
  top: 50%;
  width: 60%; 
  z-index: -1;
`
