import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/RulesPage.css'
const RulesPage = () => {
  return (
    <div id="rules" className="container my-5">
      <h1 className="text-center mb-4 display-4 text-dark">Rulebook{' '}
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg></h1>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card shadow-lg border-light">
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Budget Management</h5>
                    <p className="mb-0 text-muted">Each team starts with a predefined budget. The budget is fixed and cannot be increased during the game.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Live Auction</h5>
                    <p className="mb-0 text-muted">Teams bid on companies in a live auction format. Bids must be placed within the specified time limit for each round.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Transparency</h5>
                    <p className="mb-0 text-muted">Teams can see their own budget and companies bought, as well as those of other teams. This transparency adds a layer of strategy as teams can adjust their bids based on the actions of their competitors.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Auctioneer Authority</h5>
                    <p className="mb-0 text-muted">The auctioneer manages the auction and ensures rules are followed. The auctioneer has the final say in case of any disputes or rule clarifications.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Binding Bids</h5>
                    <p className="mb-0 text-muted">Bids are binding. Once a bid is placed, it cannot be retracted.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Overspend Penalty</h5>
                    <p className="mb-0 text-muted">If a team overspends, they will be penalized. The penalty involves forfeiting a company from their portfolio to balance their budget.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Round Structure</h5>
                    <p className="mb-0 text-muted">The game is divided into multiple rounds. In each round, a new set of companies is introduced for bidding.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Winning Criteria</h5>
                    <p className="mb-0 text-muted">At the end of the game, the team with the most valuable portfolio of companies wins. The value is calculated based on predefined criteria that include company attributes and market trends.</p>
                  </div>
                </li>
                <li className="list-group-item d-flex align-items-start border-0 bg-light mb-2 rounded-3 shadow-sm">
                  <div className="ms-3">
                    <h5 className="mb-1 text-dark">Final Authority</h5>
                    <p className="mb-0 text-muted">All decisions by the auctioneer are final. Teams must respect the auctioneer's authority and follow their instructions at all times.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
