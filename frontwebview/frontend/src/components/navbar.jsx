import React from 'react';
import { useNavigate } from "react-router-dom";

// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import Container from 'react-bootstrap/Container';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header style={style.body}>
            <div style={style.superior}>
                {/* Superior */}
                <div></div>
                <a>Logo</a>
                <button type='button' onClick={() => (navigate('/login'))}>Entrar</button>
            </div>
            <div style={style.inferior}>
                {/* inferior */}
                <a href='/'>Home</a>
                <a href='/educacao'>Educação</a>
                <a href='/noticias'>notícias</a>
                <a href='/quemsomos'>Quem Somos</a>
            </div>
        </header>
    );
}

const style = {
    body: {
        width: '100%',
        height: '20%',
        padding: '20px',
        boxShadow: "0 0 20px #00000080",
    },
    superior: {
        display:'grid',
        gridTemplateColumns:'1fr auto 1fr',
        padding: '20px',
        // backgroundColor:'red',
    },
    inferior: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
    },
}