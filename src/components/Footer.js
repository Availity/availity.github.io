import React from 'react';
import moment from 'moment';

const year = moment().format('YYYY');

const Footer = () => (
  <p className="text-center mt-3">
    Made with <i className="icon icon-heart text-danger" /> by <a href="http://www.availity.com">Availity</a> {year}
  </p>
);

export default Footer;
