import './App.css';

//social icons
import {AiFillFacebook} from 'react-icons/ai';
import {FaPinterest} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';

//images
import stars from './images/bg-stars.svg';
import hills from './images/pattern-hills.svg';

function App() {
  return (
    <main>
      <div className="title">
        <h3>WE'RE LAUNCHING SOON</h3>
      </div>
      <div className="cards-container">
        {/* <Days />
        <Hours />
        <Minutes />
        <Seconds /> */}
      </div>
      <div className="links">
        <AiFillFacebook className="icon"/>
        <FaPinterest className="icon" />
        <AiOutlineInstagram className="icon" />
      </div>
      <div className="background-container">
        <img className="stars" src={stars} />
        <img className="hills" src={hills}/>
      </div>
    </main>
  )
}

export default App;
