import React from 'react';
import { useNavigate } from "react-router-dom";

export const NavLogin = () => {
    const navigate = useNavigate();
    return (
        <header style={style.header}>
            <div>
                {/* Superior */}
                <div>
                    <button type='button' onClick={() => (navigate('/'))}>Voltar</button>{/* Não vai ser texto, apenas o icone */}
                    <a>Logo</a>
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
    }
}