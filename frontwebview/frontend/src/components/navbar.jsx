import React from 'react';
import { useNavigate, Link } from "react-router-dom";

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
                <Link to='/'>Home</Link>
                <Link to='/educacao'>Educação</Link>
                <Link to='/noticias'>Notícias</Link>
                <Link to='/quemsomos'>Quem Somos</Link>
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
    link:{
        
    }
}