import React from 'react';
import { Link } from 'react-router-dom';

function primaryLinkButton(props) {
  const { link, text } = props;
  return (
    <Link to={link} className="button is-primary is-medium has-text-white">
      {text}
    </Link>
  );
}

export default primaryLinkButton;
