import React from 'react';

import { Carousel } from 'primereact/carousel';

import { Navbar } from '../../components/navbar';
import img1 from "../../images/Med1.png";
import img2 from "../../images/Med2.png";

function Homepage() {
    const imgs = [img1, img2];
    const itemTemplate = (imgs) => {
        return (<div
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}>
            <img
                style={{
                    overflow: 'hidden',
                    width: '100%',
                    height: '500px',
                }}
                alt='Banner'
                src={imgs} />
        </div>)
    }
    return (
        <div>
            <div style={styles.canvas}>
                <Navbar />
                <div>
                    {/* Carrossel */}
                    <Carousel value={imgs} numVisible={1} numScroll={1} itemTemplate={itemTemplate} autoplayInterval={5000} />
                </div>
            </div>
            <main style={styles.body}>
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
    canvas: {
        backgroundImage: 'linear-gradient(to bottom, #333551, #3e3c96)',

    },
};

export default Homepage;
