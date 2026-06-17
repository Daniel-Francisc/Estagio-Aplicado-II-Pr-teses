import React from 'react';
import { Navbar } from '../../components/navbar';

function Homepage() {
    return (
        <main>
            <Navbar />
            <text>testando em homepage</text>
        </main>
    );
}

const styles = {
    container: {
        textAlign: 'center',
    },
};

export default Homepage;
