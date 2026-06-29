import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const NavAluno = () => {
    const navigate = useNavigate();
    const [isOpen,setIsOpen] =  useState(false);
    return (
        <header style={style.header}>
            {/* Superior */}
            <div style={style.nav}>
                <button type='button' onClick={() => (navigate(-1))}>Voltar</button>{/* Não vai ser texto, apenas o icone */}
                <a>Logo</a>
            </div>
        </header>
    );
}

const style = {
    header: {
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: "15px",
        backgroundColor: "white",
        boxShadow: "0 0 20px #00000080",
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px',
    },
}