import React from 'react';
import { useNavigate } from "react-router-dom";

// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import Container from 'react-bootstrap/Container';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <header>
            <div>
                {/* Superior */}
                <div>
                    <a>Logo</a>
                    <button type='button' onClick={() => (navigate('/login'))}>Entrar</button>
                </div>
            </div>
            <div>
                {/* inferior */}
                <a href='/'>Home</a>
                <a href='/educacao'>Educação</a>
                <a href='/noticias'>notícias</a>
                <a href='/quemsomos'>Quem Somos</a>
            </div>
        </header>
    );
}
// export default Navbar;