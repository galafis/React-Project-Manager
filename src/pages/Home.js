/**
 * Project Management Interface
 * @author Gabriel Demetrios Lafis
 */

import React from 'react';

import ProjectList from '../components/ProjectList';

function Home() {
    return (
        <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
            <h1>Project Management Interface</h1>
            <p>Created by Gabriel Demetrios Lafis</p>
            <button onClick={() => alert('Hello from Gabriel!')}>
                Click me!
            </button>
        </div>
    );
}

export default Home;
