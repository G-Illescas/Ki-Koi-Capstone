import './App.css';
import NavBar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <NavBar class="navbar">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">NavBar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </NavBar>
    </div>
  );
}

export default App;
