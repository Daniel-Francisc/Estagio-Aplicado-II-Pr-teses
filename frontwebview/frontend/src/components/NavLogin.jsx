import React from 'react';
import { useNavigate } from "react-router-dom";

export const NavLogin = () => {
    const navigate = useNavigate();
    return (
        <header style={style.header}>
            <div>
                {/* Superior */}
                <div style={style.nav}>
                    <button type='button' onClick={() => (navigate(-1))}>Voltar</button>{/* Não vai ter texto, apenas o icone */}
                    <a href='/'>Logo</a>
                </div>
            </div>
        </header>
    );
}

const style = {
    header: {
        position:'absolute',
        top:0,
        width: '100%',
        padding: "15px",
        backgroundColor: "white",
        boxShadow: "0 0 20px #00000080",
    },
    nav:{
        display:'flex',
        justifyContent: 'space-between',
        padding:'0 20px',
    },
}