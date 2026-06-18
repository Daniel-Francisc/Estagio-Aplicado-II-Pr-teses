import React from 'react';
import { useNavigate } from "react-router-dom";

import { NavLogin } from '../../components/NavLogin';

function Login() {
    const navigate = useNavigate();
    return (
        <main style={style.main}>
            <NavLogin />

            <div style={style.display}>
                <h5 style={style.textos}>Login</h5>
                <div style={style.blocos}>
                    <label htmlFor="nome">Nome</label>
                    <input id={'nome'} type="email" />
                </div>
                <div style={style.blocos}>
                    <label htmlFor="senha">senha</label>
                    <input id={'senha'} type="password" />
                </div>
                <div style={style.blocos}>
                    <label htmlFor="manter_login">Manter login?</label>
                    <input id={'manter_login'} type="checkbox" />
                </div>
                <div style={style.blocos}>
                    <button id={'entrar'} onClick={() => (navigate('/cadastrar'))}> Acessar </button>
                </div>
                <div style={style.blocos}>
                    <button id={'criar_conta'} onClick={() => (navigate('/cadastrar'))}> Criar Conta </button>
                </div>
                <a id={'recuperar_senha'} href='/recuperarsenha'>recuperar senha</a>
            </div>
        </main>
    );
}

const style = {
    main: {
        display: 'grid',
        height: '100vh',
        margin: 0,
        // backgroundColor:'#2c2c2c'
    },
    display: {
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        // width: '200px',
        // height: '200px',
        backgroundColor: '#fff'
    },
    blocos: {
        display: 'flex',
        justifyContent: 'center'
    },
    textos: {
        textTransform: 'uppercase'
    }
};

export default Login;
