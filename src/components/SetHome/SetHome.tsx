// import { useDispatch, useSelector } from "react-redux";
// import MiniKeyboard from "../MiniKeyboard/MiniKeyboard";

function SetHome({ setNumber, theme }: { setNumber: Number, theme: String }) {
    // var toggles = useSelector((state: any) => state.selectedSet);
    // const dispatch = useDispatch();

    // if (setNumber === 1) {
    //     toggles = toggles.set1;
    // } else if (setNumber === 2) {
    //     toggles = toggles.set2;
    // } else if (setNumber === 3) {
    //     toggles = toggles.set3;
    // } else if (setNumber === 4) {
    //     toggles = toggles.set4;
    // }

    return (
        <div className="card m-2">
            {/* <div className="card-header ms-auto">
                <input className="form-check-input" type="checkbox" value={toggles} id="flexCheckDefault" 
                onClick={() => {
                    dispatch({ type: "toggleSet", payload: setNumber });
                }}
                />
            </div> */}

            <div className="card-body">
                <h4 className="card-title">Set {setNumber.toString()}:</h4>
                <p className="card-subtitle">Theme: {theme}</p>
            </div>

            <div className="d-flex justify-content-center">
                <h4>CODE:</h4>
                <h3 className="mx-2">_</h3>
                <h3 className="mx-2">_</h3>
                <h3 className="mx-2">_</h3>
                <h3 className="mx-2">_</h3>
                
            </div>

            <div className="my-3">
                <a href={`/set/${setNumber}`}><button className='btn btn-dark'>Questions</button></a>
            </div>
        </div>
    )
}

export default SetHome;