import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/ContactPage.css'

const ContactSection = () => {
    return (
        <section className="contact-section container">
            <h1 className="text-center mb-4 display-4 text-dark">Event Heads {' '}<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg></h1>
            <div className="row">
                {/* Contact Card 1 */}
                <div className="col-md-4 mb-4 p-2">
                    <div className="card contact-card mt-2">
                        <img
                            src="https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2022-1668947300-97010.jpg?lm=1668947335"
                            alt="Pranav Bhiungade"
                            className="profile-img"
                        />
                        <div className="card-header">Pranav Bhiungade</div>
                        <div className="card-body">
                            <p className="card-text">Phone: +91 82620 56084</p>
                        </div>
                    </div>
                </div>
                {/* Contact Card 2 */}
                <div className="col-md-4 mb-4 p-2">
                    <div className="card contact-card mt-2">
                        <img
                            src="https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2022-1668947300-97010.jpg?lm=1668947335"
                            alt="Prem Deshmukh"
                            className="profile-img"
                        />
                        <div className="card-header">Prem Deshmukh</div>
                        <div className="card-body">
                            <p className="card-text">Phone: +91 70204 04591</p>
                        </div>
                    </div>
                </div>
                {/* Contact Card 3 */}
                <div className="col-md-4 mb-4 p-2">
                    <div className="card contact-card mt-2">
                        <img
                            src="https://tmssl.akamaized.net/images/foto/galerie/neymar-brazil-2022-1668947300-97010.jpg?lm=1668947335"
                            alt="Vishal Bhokre"
                            className="profile-img"
                        />
                        <div className="card-header">Vishal Bhokre</div>
                        <div className="card-body">
                            <p className="card-text">Phone: +91 99220 45868</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
