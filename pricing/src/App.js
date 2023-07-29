import './App.css';
import { useState } from 'react';

function App() {
  const [toggleClick, setToggleClick] = useState(false);
  const handleToggle = () => {
    setToggleClick(!toggleClick);
  };
  return (
    <main className="App">
      <h1>Our Pricing</h1>
      <p>
        Annually
        <label className="switch">
          <input type="checkbox" onClick={() => handleToggle()} />
          <span className="slider round"></span>
        </label>
        Monthly
      </p>
      <div className="cardHolder">
        <div className="card">
          <div className="cardInner">
            Basic {toggleClick ? <h1>$19.99</h1> : <h1>$199.99</h1>}
            <span>500 GB Storage</span>
            <span> 2 Users Allowed</span> <span>Send up to 3 GB</span>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card mid">
          <div className="cardInner">
            Professional {toggleClick ? <h1>$24.99</h1> : <h1>$249.99</h1>}
            <span> 1 TB Storage</span>
            <span> 5 Users Allowed</span>
            <span> Send up to 10 GB</span>
            <button>Learn More</button>
          </div>
        </div>
        <div className="card">
          <div className="cardInner">
            Master {toggleClick ? <h1>$39.99</h1> : <h1>$399.99</h1>}
            <span>2 TB Storage</span>
            <span>10 Users Allowed</span> <span>Send up to 20 GB</span>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="www.ryanpdesigns.com">Ryan Paulson</a>.
      </div>
    </main>
  );
}

export default App;
