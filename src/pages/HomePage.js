import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>HomePage</h1>
                <h2>
                    <a href={'/User'}>User</a>
                </h2>
            </div>
        );
    }
}

export default HomePage;