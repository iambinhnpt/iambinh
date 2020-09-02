import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <section
        className="paralax-mf footer-paralax bg-image sect-mt4 route"
        style={{ backgroundImage: "url(img/overlay-bg.jpg)" }}
      >
        <div className="overlay-mf" />
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full">
                  <div className="row">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">Get in Touch</h5>
                    </div>
                    <div className="more-info">
                      <p className="lead">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis dolorum dolorem soluta quidem expedita aperiam
                        aliquid at. Totam magni ipsum suscipit amet? Autem nemo
                        esse laboriosam ratione nobis mollitia inventore?
                      </p>
                      <ul className="list-ico">
                        <li>
                          <span className="ion-ios-location" /> 329 WASHINGTON
                          ST BOSTON, MA 02108
                        </li>
                        <li>
                          <span className="ion-ios-telephone" /> (617) 557-0089
                        </li>
                        <li>
                          <span className="ion-email" /> contact@example.com
                        </li>
                      </ul>
                    </div>
                    <div className="socials">
                      <ul>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-facebook" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-instagram" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-twitter" />
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href>
                            <span className="ico-circle">
                              <i className="ion-social-pinterest" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="copyright-box">
                  <p className="copyright">
                    © Copyright <strong>DevFolio</strong>. All Rights Reserved
                  </p>
                  <div className="credits">
                    {/*
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
          */}
                    Designed by{" "}
                    <a href="https://bootstrapmade.com/">BootstrapMade</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}
