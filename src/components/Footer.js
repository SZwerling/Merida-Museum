import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-sm-4 offset-md-1 mt-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                        <li><Link className="nav-link" to="/visit" >
                            <i className="fa fa-users fa-sm" /> Visit
                        </Link></li> 
                        <li><Link className="nav-link" to="/events" >
                            <i className="fa fa-calendar fa-sm" /> Events
                        </Link></li>
                        <li><Link className="nav-link" to="/members" >
                            <i className="fa fa-heart fa-sm" /> Comments
                        </Link></li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-3 mt-1">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 mt-1">
                        <a role="button" className="btn btn-link footer-link" href="tel:+12065551234"><i className="fa fa-phone" /> 1-206-555-1234</a><br />
                        <a role="button" className="btn btn-link footer-link" href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" /> reservations@citymuseum.org</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;