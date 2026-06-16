import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useNavigation } from 'react-router-dom';
import Login from './views/Login.jsx';
import Cadastro from './views/Cadastro.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastro />} />
            </Routes>
        </Router >
    );
}