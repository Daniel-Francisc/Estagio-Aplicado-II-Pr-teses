import React from 'react';
import { Navbar } from '../../components/navbar';

function Homepage() {
    return (
        <div>
            <Navbar />
            <main style={styles.body}>
                <div>
                    {/* Carrossel */}
                </div>
                <text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda non laudantium commodi culpa nulla enim vero minima iure repellendus tenetur architecto ullam aliquid excepturi numquam unde voluptate eligendi, voluptates quod?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis pariatur veniam voluptatum aspernatur deserunt repudiandae, soluta, provident natus fuga vero cum corporis. Ea error placeat quidem optio, dignissimos quae!
                </text>
            </main>
            <footer>

            </footer>
        </div>
    );
}

const styles = {
    body: {
        textAlign: 'justify',
        margin: '3% 10%',
    },
};

export default Homepage;
