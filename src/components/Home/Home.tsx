import Navbar from "../Navbar/Navbar";
import "./home.css";
import image from "./the-sims-tile-the-sims-mobile.png.adapt.crop16x9.652w.png";
import image2 from "./st_small_507x507-pad_600x600_f8f8f8.u4-removebg-preview.png"
function Home() {
  return (
    <div>
      <title>Homepage</title>
      <Navbar />

      <div className="homecontainer">
        <div className="text">
          <div className="header-wrapper">
            <h1>Welcome to The Sims 4 Trivia</h1>
          </div>
          <p>
            Are you ready to test your knowledge of the Sims? Throughout the
            room, you'll find posters containing multiple-choice questions
            related to various aspects of the game, such as characters, history,
            interactions, and items. Answer each question correctly to obtain a
            letter and form a four-letter code for each phase.
          </p>
        </div>
        <div className="image-wrapper">
          <img src={image} alt="The Sims Mobile" className="image" />
        </div>
      </div>

      <div className="homecontainer">
        <div className="image-wrapper">
          <img src={image2} alt="The Sims Mobile" className="image2" />
        </div>
        <div className="text">
          <div className="header-wrapper">
            <h2>About the Prizes</h2>
          </div>
          <p>
            After finding the codes, input them into the website. You can gain
            Plumbob stickers and 3D prints for completing all the phases. If 
            you get stuck, feel free to search the questions on the ‎ 
             
             
            <a href="https://sims.fandom.com/wiki/The_Sims_4" target="_blank"> wiki fandom</a>.
          </p>
        </div>
      </div>

      <div className="d-grid gap-3 col-6 mx-auto link-home">

          <button onClick={() => window.location.href= "/set"} className="btn start-button mb-3" type="button" >
            Start Activity
            
          </button>
      </div>
      
    </div>
  );
}

export default Home;
