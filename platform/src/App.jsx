import React from 'react';
import './App.css';

function App() {

  return (
    <>
      <main>
        <section className='dashboard'>
          <span className="action">
            <p>Maker Spaces</p>
            <h4>0</h4>
          </span>
          <span className="action">
            <p>Hackathons</p>
            <h4>0</h4>
          </span>
          <span className="action">
            <p>Build Publish</p>
            <h4>0</h4>
          </span>
          <span className="action">
            <p>Projects</p>
            <h4>0</h4>
          </span>
        </section>
        
        <section className='content'>
          <h1>Where Stuff <br /> Gets Built.</h1>
          <p><a href="/" className='active'>bckyrd</a> platform, provides a place to work, showcase projects marketplace, hackathon challenges and progresses stuff built in unusual workspaces by enthusiast.</p>
          <a href="https://work.bckyrd.io" className='get-started'>Start</a>
        </section>


      </main>
    </>
  )
}

export default App;