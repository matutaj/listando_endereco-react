import styled from "styled-components";

export const PageMain = styled.body`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #c8c8c8;
    width: 100%;
    background-color: #272b30;
    height: 200vh;
`

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

export const Wel = styled.div`
    margin-bottom: 30px;
    background-color: #1c1e22;
    padding-top: 48px;
    padding-bottom: 48px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('https://bootstrapmade.com/demo/templates/Logis/assets/img/hero-bg.png');
    background-size: cover;
    h2{
        font-size: 63px;
        color: #cabb49;
        

    }
    span{
        font-size:19px;
        margin-top: -45px;
    }
    p{

        font-size:19px;
        margin-top: -3px;
    }
`;

export const Listar = styled.div`
width: 100%;
height: 500px;
`;