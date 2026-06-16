import React from 'react';

function Login() {
    return (
        <div style={{
            display: "flex",
            backgroundColor: "red"
        }}>
            <h1>Login</h1>
            <input id={'nome'} type='email' />
            <input id={'senha'} type='password' />
            <input id={'manter_login'} type='checkbox' />
            <input id={'entrar'} type='button' />
            <input id={'recuperar_senha'} type='button' />
            <a id={'recuperar_senha'} >recuperar senha</a>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Login;
