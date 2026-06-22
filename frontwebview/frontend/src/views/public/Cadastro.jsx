import React from 'react';
import { useNavigate } from "react-router-dom";

import BackgroundSlideshow from '../../components/background.jsx';
import { NavLogin } from '../../components/NavLogin';

function Cadastro() {
    const navigate = useNavigate();
    return (
        <BackgroundSlideshow>
            <NavLogin />
            <form action={() => { navigate('/login') }} method='POST'>
                <div style={style.display}>
                    <h4 style={style.textos}>Criar conta</h4><br />
                    <div style={style.blocos}>
                        <label htmlFor="nome">Nome</label><br />
                        <input id={'nome'} type="email" />
                    </div>
                    <div style={style.blocos}>
                        <label htmlFor="email">Email</label><br />
                        <input id={'email'} type="email" />
                    </div>
                    <div style={style.blocos}>
                        <label htmlFor="cpf">CPF</label><br />
                        <input id={'cpf'} type="password" />
                    </div>
                    <div style={style.blocos}>
                        <label htmlFor="senha">senha</label><br />
                        <input id={'senha'} type="password" />
                    </div>
                    <div style={style.blocos}> <br />
                        <button id={'criar_conta'} type='submit'> Criar Conta </button>
                    </div>
                    <div style={style.blocos}> <br />
                        <button id={'login'} type='reset' onClick={() => (navigate('/login'))}> Já possui acesso? </button>
                    </div> <br />
                    <a id={'recuperar_senha'} href='/recuperarsenha'>recuperar senha</a>
                </div>
            </form>
        </BackgroundSlideshow>
    );
}


const style = {
    display: {
        width: "60%",
        maxWidth: '500px',
        minWidth: '300px',
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
        boxShadow: "0 0 20px #00000080",
        backgroundColor: "white",
    },
    blocos: {
        justifyContent: 'center'
    },
    textos: {
        textTransform: 'uppercase',
        textAlign: 'center'
    }
};

export default Cadastro;
