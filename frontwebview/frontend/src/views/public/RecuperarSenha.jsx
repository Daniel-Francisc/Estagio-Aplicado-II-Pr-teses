import React from 'react';
import { InputMask } from 'primereact/inputmask';
import { FloatLabel } from 'primereact/floatlabel';

function RecuperarSenha() {
    return (
        <div style={styles.container}>
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
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default RecuperarSenha;
