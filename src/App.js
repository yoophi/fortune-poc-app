import React, {useState, useEffect} from 'react';
import cookie from './images/cookie.png';
import cookieOpen from './images/cookie-open.png';
import './App.css';

function App() {
  // creating local state variables
  let [allFortunes, setAllFortunes] = useState([]);
  let [currentFortune, setCurrentFortune] = useState(null);

  // fetching all fortunes through a HTTP request
  useEffect(() => {
    fetch('/fortunes.json')
      .then((res) => res.json())
      .then((data) => {
        setAllFortunes(data);
      });
  });

  let fetchFortune = () => {
    // fancy algorithm to get your unique fortune ;)
    let randomIndex = Math.floor((Math.random() * allFortunes.length));
    let fortune = allFortunes[randomIndex];
    console.log(allFortunes, randomIndex, fortune)
    setCurrentFortune(fortune);
  }

  let resetFortune = () => {
    setCurrentFortune(null);
  }

  return (
    <div className="App">
      <header className="App-header">

        {!currentFortune &&
          <div onClick={fetchFortune} className="pointer">
            <img src={cookie} className="App-logo" alt="cookie" />
          </div>
        }

        {currentFortune &&
          <div>
            <div>
              <img src={cookieOpen} className="App-logo no-animation fade-in" alt="cookie" />
            </div>
            <p className="fade-in">
              {currentFortune}
            </p>
            <a
              className="App-link fade-in-slow pointer"
              onClick={resetFortune}
            >
              Don't like it? Try again...
            </a>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
