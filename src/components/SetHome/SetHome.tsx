

function SetHome({ setNumber, theme, code }: { setNumber: number, theme: String, code: String }) {
    const getQ1 = localStorage.getItem(`set${setNumber}-q${((setNumber - 1) * 4) + 1}`);
    const getQ2 = localStorage.getItem(`set${setNumber}-q${((setNumber - 1) * 4) + 2}`);
    const getQ3 = localStorage.getItem(`set${setNumber}-q${((setNumber - 1) * 4) + 3}`);
    const getQ4 = localStorage.getItem(`set${setNumber}-q${((setNumber - 1) * 4) + 4}`);

    return (
        <div className="card m-2">

            <div className="card-body">
                <h4 className="card-title">Set {setNumber.toString()}:</h4>
                <p className="card-subtitle">Theme: {theme}</p>
            </div>

            <div className="d-flex justify-content-center">
                <h4>CODE:</h4>
                {getQ1 || getQ1 === "true" ? <h3 className="mx-2">{code.substring(0,1)}</h3> : <h3 className="mx-2">_</h3>}
                {getQ2 || getQ2 === "true" ? <h3 className="mx-2">{code.substring(1,2)}</h3> : <h3 className="mx-2">_</h3>}
                {getQ3 || getQ3 === "true" ? <h3 className="mx-2">{code.substring(2,3)}</h3> : <h3 className="mx-2">_</h3>}
                {getQ4 || getQ4 === "true" ? <h3 className="mx-2">{code.substring(3,4)}</h3> : <h3 className="mx-2">_</h3>}
            </div>

            <div className="my-3">
                <a href={`/set/${setNumber}`}><button className='btn btn-dark'>Questions</button></a>
            </div>
        </div>
    )
}

export default SetHome;