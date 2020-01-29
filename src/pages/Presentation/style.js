import styled from 'styled-components/native';

export const LogoSistema = styled.ImageBackground `
    width: 30%;
    height: 30%;
` 
export const Container = styled.View `
    flex: 1;
`
export const DescricaoApp = styled.Text `
    font-size: 13px;
    color: #F39422;
`
export const NomeApp = styled.Text `
    font-size: 24px;
    color: #F39422;
    font-weight: bold;
    
`
export const ImagemHeader = styled.ImageBackground `
    align-items : center;
    width: 100%;
    height: 40%;
`
export const ContainerInformativo = styled.View `
    flex: 1;
    margin-left: 50px;
    margin-right : 50px;
`

export const NomeDescricao = styled.Text `
    font-size: 13px;
    color: #293A80;
`
export const ContainerFooter = styled.View `
    position : absolute;
    left: 0;
    right: 0;
    bottom: 0;
    align-items : flex-end;
    margin: 0px 20px 25px 0px;
`
export const ContainerDescricao = styled.View `
    margin-bottom: 20px;
`
export const NomeNegrito = styled.Text `
    font-weight: bold;
    font-size: 18px;
    color : #010038;
`;