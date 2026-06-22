import React from 'react';
import { Navbar } from '../../components/navbar';

function Homepage() {
    return (
        <div>
            <Navbar />
            <main>
                <text>testando em homepage</text>
            </main>
        </div>
    );
}

const styles = {
    body: {
        textAlign: 'center',
    },
};

export default Homepage;
