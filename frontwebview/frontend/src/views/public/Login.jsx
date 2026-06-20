import React from 'react';
import { useNavigate } from "react-router-dom";

import BackgroundSlideshow from '../../components/background.jsx';
import { NavLogin } from '../../components/NavLogin';

function Login() {
    const navigate = useNavigate();
    return (
        <BackgroundSlideshow>
            <NavLogin />
            <main >
                <form action="">
                    <div style={style.display}>
                        <h5 style={style.textos}>Login</h5>
                        <div style={style.blocos}>
                            <label htmlFor="nome">Nome</label><br />
                            <input id={'nome'} type="email" />
                        </div>
                        <div style={style.blocos}>
                            <label htmlFor="senha">senha</label><br />
                            <input id={'senha'} type="password" />
                        </div>
                        <div style={style.blocos}> <br />
                            <button id={'entrar'} onClick={() => (navigate('/meuscursos'))}> Acessar </button>
                        </div>
                        <div style={style.blocos}> <br />
                            <button id={'criar_conta'} onClick={() => (navigate('/cadastrar'))}> Criar Conta </button>
                        </div> <br />
                        <a id={'recuperar_senha'} href='/recuperarsenha'>recuperar senha</a>
                        <div style={style.blocos}>
                            <label htmlFor="manter_login">Manter login?</label>
                            <input id={'manter_login'} type="checkbox" />
                        </div>
                    </div>
                </form>
            </main>
        </BackgroundSlideshow>
    );
}

const style = {
    display: {
        // display:'grid',
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

export default Login;
