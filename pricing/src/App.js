import './App.css';

function App() {
  return (
    <main className="App">
      Our Pricing Annually Monthly
      <div className="cardHolder">
        <div className="card">
          Basic <h1>$19.99</h1> <h1>$199.99</h1> <span>500 GB Storage</span>
          <span> 2 Users Allowed</span> <span>Send up to 3 GB</span>
          <button>Learn More</button>
        </div>
        <div className="card">
          Professional <h1>$24.99</h1>
          <h1>$249.99</h1> <span> 1 TB Storage</span>
          <span> 5 Users Allowed</span>
          <span> Send up to 10 GB</span>
          <button>Learn More</button>
        </div>
        <div className="card">
          Master <h1>$39.99</h1> <h1>$399.99</h1> <span>2 TB Storage</span>
          <span>10 Users Allowed</span> <span>Send up to 20 GB</span>
          <button>Learn More</button>
        </div>
      </div>
      <div class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Ryan Paulson</a>.
      </div>
    </main>
  );
}

export default App;
