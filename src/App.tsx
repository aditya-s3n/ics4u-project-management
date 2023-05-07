import './App.css';
import Navbar from './components/Navbar/Navbar';
import SetHome from './components/SetHome/SetHome';

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
          
          SET QUESTIONS
        </div>
      );
      
    } else {
      
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
    
  } else {

    return (
      <div>
        HOME
      </div>
    );

  }
  
}

export default App;
