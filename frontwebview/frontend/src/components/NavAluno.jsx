import React from 'react';
import { useNavigate } from "react-router-dom";

export const NavAluno = () => {
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