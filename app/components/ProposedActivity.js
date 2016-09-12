'use es6';

const React = require('react');

const { PropTypes } = React;

const ProposedActivity = ({title}) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

ProposedActivity.propTypes = {
  title: PropTypes.string
};

module.exports = ProposedActivity;
