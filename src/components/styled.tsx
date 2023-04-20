import styled from "styled-components";


export const Logo = styled.img`
width:200px;
cursor: pointer;
`;


export const Nav = styled.nav`


display: flex ;
    justify-content: space-around;
    align-items: center;
    background: #777;
    font-family: Roboto, sans-serif;
    width: 100%;
    height: 50px;
   
   
`;

export const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;

    li{
        margin-left: 70px;
        font-size: 16px;
        color:#fff;
        cursor: pointer;
        transition: 0.3s;
    }
    li:hover{
        opacity: .3s;
        color:#2b2e32 ;
}
`;
export const Input = styled.div`
  display  :flex ;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 100px;
`;
export const Pesquisa = styled.input`
    width: 400px;
    padding: 03px;
    height: 40px;
    color: #777;
    font-size: 19px;
    font-family: sans-serif;
    border: none;

    :focus{

    }
`;
export const Button = styled.button`
    width: 105px;
    border: none;
    padding: 01px;
    height: 40px;
    background-color: #777;
    color: #fff;
    font-size: 15px;
    cursor: pointer;

    :hover{
        background-color: #2f3a4e;
    }

`