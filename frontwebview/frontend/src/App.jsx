import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useNavigation } from 'react-router-dom';
import Login from './views/public/Login.jsx';
import Homepage from './views/public/Homepage.jsx';
import Cadastro from './views/public/Cadastro.jsx';
import Educacao from './views/public/Educacao.jsx';
import Noticias from './views/public/Noticias.jsx';
import QuemSomos from './views/public/QuemSomos.jsx';
import RecuperarSenha from './views/public/RecuperarSenha.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastro />} />
                <Route path="/educacao" element={<Educacao />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/quemsomos" element={<QuemSomos />} />
                <Route path="/recuperarsenha" element={<RecuperarSenha />} />
            </Routes>
        </Router >
    );
}