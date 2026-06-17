import React from 'react';
import { useNavigate } from "react-router-dom";

// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import Container from 'react-bootstrap/Container';

export const NavLogin = () => {
    const navigate = useNavigate();
    return (
        <header>
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
// export default Navbar;