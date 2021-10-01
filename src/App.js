import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form class="search-form">
        <div class="row">
          <div class="col-9">
            <input 
            type="search"
            placeholder="City name"
            autoFocus={true}
              autocomplete="off"
                class="form-control shadow-sm"
            />
          </div>
          <div class="col-3"></div>
        </div>
      </form>
    
    </div>
  );
}

export default App;
