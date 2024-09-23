import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

const PrizesPage = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 display-4 text-dark">
        Prizes{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          class="bi bi-award"
          viewBox="0 0 16 16"
        >
          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
        </svg>
      </h1>
      <div className="row">
        {/* First Place Prize */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-dark">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title">1st Place</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                The first-place team will receive a grand trophy and a
                certificate of excellence, along with a cash prize. The trophy
                symbolizes their achievement and can be proudly displayed as a
                testament to their victory. The certificate of excellence is a
                valuable addition to their personal or professional portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* Second Place Prize */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-dark">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title">2nd Place</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                The second-place team will be awarded a runner-up trophy and a
                certificate of achievement. This recognition highlights their
                strong performance and competitive spirit. Additionally, they
                will receive a smaller cash prize as a token of appreciation for
                their efforts.
              </p>
            </div>
          </div>
        </div>

        {/* Third Place Prize */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-lg border-dark">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title">3rd Place</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                The third-place team will receive a certificate of participation
                and a small cash prize. While they may not have secured the top
                spots, their participation and strategic efforts are still
                commendable. The certificate serves as a reminder of their
                involvement and the experience they gained during the game.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Participation Prize */}
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card shadow-lg border-dark">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title">Participation Prize</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                All participants will receive a participation certificate,
                acknowledging their involvement in the Auction Arena. This
                certificate is a testament to their willingness to engage in a
                challenging and educational experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Prizes */}
      <div className="row">
        <div className="col-md-12">
          <div className="card shadow-lg border-dark">
            <div className="card-header bg-dark text-white">
              <h5 className="card-title">Special Prizes</h5>
            </div>
            <div className="card-body">
              <p className="card-text">
                Special prizes may also be awarded for categories such as the
                "Best Strategist" or "Most Innovative Team." These awards
                recognize unique contributions and exceptional performances that
                stood out during the game.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrizesPage;
