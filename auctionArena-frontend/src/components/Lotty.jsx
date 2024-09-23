import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const LottiePlayer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center">
                    <dotlottie-player 
                        src="https://lottie.host/3613bc40-8529-4118-8e89-399e9edfaf9b/Lrl7tBWfvE.json" 
                        background="transparent" 
                        speed="1" 
                        style={{ 
                            maxWidth: '40%', 
                            marginBottom: '20px', 
                            borderRadius: '5px' 
                        }} 
                        loop 
                        autoplay 
                    />
                </div>
            </div>
        </div>
    );
}

export default LottiePlayer;
