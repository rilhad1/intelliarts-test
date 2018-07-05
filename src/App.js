import React from 'react';
import Alert from 'react-s-alert';
import CommandsInput from './components/Commands';
import Results from './components/Results';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';


const App = () => (
  <React.Fragment>
    <CommandsInput />
    <Alert stack />
    <Results />
  </React.Fragment>
);


export default App;

