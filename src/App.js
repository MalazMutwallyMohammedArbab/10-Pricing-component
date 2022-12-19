import React from 'react';
import './App.css';

const App = () => {
    return(
        
        <section className='priceSection background'>
            <div className="container">
        <div className="shadow">
            <h2 className="title">Our Pricing</h2>
        <div className="subtitle">
            <div>Annually</div>
            <center>
                <input type="checkbox" id="switch" class="checkbox" />
                <label for="switch" class="toggle"></label>
            </center>
            <div>Monthly</div>
        </div>
        <div className="cards">
            <div className="card">
                <div className='cardBody'>
                <h3 className="text-center">Basic</h3>
                <h1>$19.99</h1>
                <hr />
                <h4>500 GB Storage</h4>
                <hr />
                <h4>2 Users Allowed</h4>
                <hr />
                <h4>Send up to 3 GB</h4>
                <hr />
                <button class="btn">LEARN MORE</button>
                </div>
            </div>
            
            <div className="card2">
            <div className='cardBody'>
                <h3>Professional</h3>
                <h1>$24.99</h1>
                <hr />
                <h4>1 TB Storage</h4>
                <hr />
                <h4>5 Users Allowed</h4>
                <hr />
                <h4>Send up to 10 GB</h4>
                <hr />
                <button className="button">LEARN MORE</button>
            </div>
            </div>

            <div className="card">
            <div className='cardBody'>
                <h3>Master</h3>
                <h1>$39.99</h1>
                <hr />
                <h4>2 TB Storage</h4>
                <hr />
                <h4>10 Users Allowed</h4>
                <hr />
                <h4>Send up to 20 GB</h4>
                <hr />
                <button className="btn">LEARN MORE</button>
            </div>
            </div>
        </div>
        </div>
        </div>
        </section>
    )
}

export default App;