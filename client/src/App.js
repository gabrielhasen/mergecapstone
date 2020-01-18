//import React from 'react';
import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';


import Routes from './Routes';
import muiTheme from './Themes/muiTheme';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Dashboard/>
//       </header>
//     </div>
//   );
// }

// export default App;

const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <MuiThemeProvider theme={muiTheme}>
        <Routes />
        </MuiThemeProvider>
      </Router>
    );
  }
}
