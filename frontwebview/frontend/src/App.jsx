import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useNavigation } from 'react-router-dom';
import Login from './views/Login.jsx';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </Router >
    );
}