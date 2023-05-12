import './App.css';
import Navbar from './components/Navbar/Navbar';
import SetHome from './components/SetHome/SetHome';
import Home from './components/Home/Home';
import SetQuestion from './components/SetQuestion/SetQuestion';

function App() {
  const pathname = window.location.pathname;
  const setBoolean = pathname.substring(0, 4) === "/set";
  const setQuestion = pathname.substring(5, 6);
  
  const setQuestionValidity = setQuestion === "1" || setQuestion === "2" || setQuestion === "3" || setQuestion === "4"

  if (setBoolean) {
    if (setQuestionValidity) {
      
      return (
        <div className='App'>
          <Navbar />
          
          <SetQuestion setNumber={Number(setQuestion)} />
        </div>
      );
      
    } else {
      
      return (
        <div className="App">
          <Navbar />
    
          <div className="container text-center my-2">
            <div className="row">
              <div className="col">
                <SetHome setNumber={1} theme={"Build Mode Items"} code={"YODA"} />
              </div>
              <div className="col">
              <SetHome setNumber={2} theme={"Lore/History"} code={"WILL"} />
              </div>
            </div>
    
            <div className="row">
              <div className="col">
                <SetHome setNumber={3} theme={"Interaction Betweeen Sims"} code={"NPCS"} />
              </div>
              <div className="col">
                <SetHome setNumber={4} theme={"Guess the Sim"}  code={"SIMS"}/>
              </div>
            </div>
          </div>
        
        </div>

      );

    }
    
  } else {

    return (
      <div>
        <Home />
      </div>
    );

  }
  
}

export default App;
