import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3 className="strong">Our Location</h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.1156141666265!2d-117.16369015624885!3d32.71765685269645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d954a78cd44181%3A0xc4e651fa8d16fca9!2s954%20Fifth%20Ave%2C%20San%20Diego%2C%20CA%2092101!5e0!3m2!1sen!2sus!4v1588561626229!5m2!1sen!2sus"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
                allowFullscreen
              />
            </div>
            <div className="col-md-5">
              <h4><strong>Contact Us</strong></h4>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Phone" />
                </div>
                  <textarea className='form-control' cols='30' rows='3' placeholder="Message" />
                  <Link className="btn btn-outline-primary text-uppercase mt-2">
                    <i className="fab fa-paper-plane-o" aria-hidden='true' />
                    <i className="fab fa-telegram-plane" />&nbsp;Send
                  </Link>
              </form>
            </div>
          </div>
        </div>


      </section>
    );
  }
}

export default Contacts;
