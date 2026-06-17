import React from 'react';
import { InputMask } from 'primereact/inputmask';
import { FloatLabel } from 'primereact/floatlabel';
import { NavLogin } from '../../components/NavLogin';

function Cadastro() {
    return (
        <div style={styles.container}>
            <NavLogin />

            <FloatLabel>
                <InputMask placeholder="Digite seu nome" id='nome' type='text' />
                <label htmlFor="nome">Nome</label>
            </FloatLabel>
            <FloatLabel>
                <InputMask mask='999.999.999-99' placeholder="xxx.xxx.xxx-xx" id='cpf' type='email' />
                <label htmlFor="cpf">CPF</label>
            </FloatLabel>
            <FloatLabel>
                <InputMask placeholder="Digite sua senha" id='senha' type='password' />
                <label htmlFor="senha">Senha</label>
            </FloatLabel>
            <FloatLabel>
                <InputMask placeholder="Repita sua senha" id='repetir_senha' type='password' />
                <label htmlFor="repetir_senha">Senha</label>
            </FloatLabel>
            <input id='cadastrar' type='button' />
            <input id='possui_login' type='button' />
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Cadastro;
