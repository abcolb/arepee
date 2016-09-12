'use es6';

const React = require('react');
const ReactDOM = require('react-dom');
const ProposedActivity = require('./components/ProposedActivity');

const PROPOSED_ACTIVITIES_TITLE = 'Proposed Activities';

ReactDOM.render(<ProposedActivity title={PROPOSED_ACTIVITIES_TITLE} />, app); // eslint-disable-line no-undef
