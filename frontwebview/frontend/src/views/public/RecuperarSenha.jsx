import React from 'react';
import { useNavigate } from "react-router-dom";

import { InputMask } from 'primereact/inputmask';
import { FloatLabel } from 'primereact/floatlabel';

import BackgroundSlideshow from '../../components/background.jsx';
import { NavLogin } from '../../components/NavLogin';

function RecuperarSenha() {
    const navigate = useNavigate();
    return (
        <BackgroundSlideshow>
            <NavLogin />
            <main >
                <form action="">
                    <div style={style.display}>
                        <h4 style={style.textos}>recuperar senha</h4><br />

                        <FloatLabel>
                            <InputMask placeholder="Digite seu nome" id='nome' type='text' />
                            <label htmlFor="nome">Nome</label>
                        </FloatLabel>
                        <FloatLabel>
                            <InputMask mask='999.999.999-99' placeholder="xxx.xxx.xxx-xx" id='cpf' type='email' />
                            <label htmlFor="cpf">CPF</label>
                        </FloatLabel>
                        <button id='RedefinirSenha'>Redefinir Senha</button>
                        <button id='Voltar'>Voltar para Login</button>
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

export default RecuperarSenha;