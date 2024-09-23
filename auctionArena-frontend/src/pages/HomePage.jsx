import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const GameOverview = () => {
  return (
    <>
      {/* Hero Section */}
      <header
        className="hero-section"
        style={{
          backgroundSize: 'cover',
          color: '#000000',
          padding: '25px 0',
          textAlign: 'center',
          position: 'relative', // Ensure positioning for the image
        }}
      >
        <div className="container">
          
          {/* <img
            src="https://credenz.in/assets/bplan-gw_hmIkn.png"
            alt="Game Overview"
            style={{
              maxWidth: '100%',
              height: 'auto',
              marginBottom: '20px',
              backgroundColor:'black',
              borderRadius:'5px'
               
            }}
          /> */}

          <div className="container d-flex justify-content-center mt-5">
          <dotlottie-player 
            src="https://lottie.host/3613bc40-8529-4118-8e89-399e9edfaf9b/Lrl7tBWfvE.json" 
            background="transparent" 
            speed="1" 
            style={{  maxWidth: '40%',
              marginBottom: '20px',
              borderRadius:'5px' ,
              }} 
            loop 
            autoplay 
        />
          </div>
        
          <h1 className="text-center mb-4 display-4 text-dark">Challenge Yourself {' '}<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z"/>
</svg></h1>
          <p style={{ fontSize: '1.25rem' }} >
            Put your logical, aptitude, and business knowledge to the test. Showcase your communication skills and strong decision-making abilities in this thrilling multi-round game.
          </p>
        </div>
      </header>

      {/* Game Rounds */}
      <section className="rounds container" style={{ padding: '10px 0' }}>
        <div className="row">
          {/* Aptitude Round */}
          <div className="col-md-4 round" style={{ marginBottom: '30px' }}>
            <div className="card mb-3">
              <div className="card-header">Round 1: Aptitude Round</div>
              <div className="card-body">
                <h2 className="card-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>Aptitude Round</h2>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Round-1 is the aptitude round that includes questions based on data interpretation and basic aptitude with a business flavor, followed by stock and share market questions.
                </p>
              </div>
            </div>
          </div>
          {/* Auction Round */}
          <div className="col-md-4 round" style={{ marginBottom: '30px' }}>
            <div className="card mb-3">
              <div className="card-header">Round 2: Auction Round</div>
              <div className="card-body">
                <h2 className="card-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>Auction Round</h2>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Qualified participants will form teams of 4. Each team is given an equal budget to buy companies. Teams will be shortlisted based on the addition of Company ratings for the next round.
                </p>
              </div>
            </div>
          </div>
          {/* Shark Tank Round */}
          <div className="col-md-4 round" style={{ marginBottom: '30px' }}>
            <div className="card mb-3">
              <div className="card-header">Round 3: Shark Tank Round</div>
              <div className="card-body">
                <h2 className="card-title" style={{ fontSize: '2rem', marginBottom: '15px' }}>Shark Tank Round</h2>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Qualified teams will be given random pitches and must present them in front of real sharks. The sharks will judge your pitching skills to determine the winner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GameOverview;
