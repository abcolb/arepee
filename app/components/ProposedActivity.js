'use es6';

const React = require('react');

const { PropTypes } = React;

const ProposedActivity = ({ title }) => {
  return (
    <div>
      <header className="header">
        <h1 className="headline">{title} <small>by ZURB</small></h1>
        <ul className="header-subnav">
          <li><a target="_blank" href="http://zurb.com/responsive">Take Action!</a></li>
          <li><a target="_blank" href="http://zurb.com/responsive" className="is-active">Carpe Diem!</a></li>
          <li><a target="_blank" href="http://zurb.com/responsive">Just do it!</a></li>
        </ul>
      </header>
    </div>
  );
};

ProposedActivity.propTypes = {
  title: PropTypes.string
};

module.exports = ProposedActivity;
