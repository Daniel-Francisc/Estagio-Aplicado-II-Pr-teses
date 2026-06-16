import React from 'react';

function Login() {
    return (
        <main style={style.main}>
            <h5 style={style.textos}>Login</h5>
            <div style={style.blocos}>
                <input id={'nome'} type="email" />
            </div>
            <div style={style.blocos}>
                <input id={'senha'} type="password" />
            </div>
            <div style={style.blocos}>
                <input id={'manter_login'} type="checkbox" />
            </div>
            <div style={style.blocos}>
                <button id={'entrar'}> Acessar </button>
            </div>
            <div style={style.blocos}>
                <button id={'criar_conta'}> Criar Conta </button>
            </div>
            <a id={'recuperar_senha'}>recuperar senha</a>
        </main>
    );
}

const style = {
    main: {
        display: 'grid',
        justifyContent: 'center'
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
