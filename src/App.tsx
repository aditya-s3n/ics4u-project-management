import './App.css';
import Navbar from './components/Navbar/Navbar';
import SetHome from './components/SetHome/SetHome';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container text-center my-2">
        <div className="row">
          <div className="col">
            <SetHome setNumber={1} theme={"Objects"} />
          </div>
          <div className="col">
          <SetHome setNumber={2} theme={"Objects"} />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <SetHome setNumber={3} theme={"Objects"} />
          </div>
          <div className="col">
            <SetHome setNumber={4} theme={"Objects"} />
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default App;
