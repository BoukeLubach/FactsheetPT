import logo from './logo.svg';
import './App.css';

// React Required
import React from 'react';

// redux store
import store from "./redux/store";
import { Provider } from "react-redux";

// Blocks Layout
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/headers/Header.jsx';

// import PrivateRoute from './components/common/PrivateRoute';
// import PageScrollTop from './components/common/PageScrollTop';



// pages  
import Home from './pages/Home';


import FactsheetFormContainer from './pages/factsheet/FactsheetFormContainer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={'/'}>
        {/* <PageScrollTop> */}
        <Switch>

          <Route exact path={`${process.env.PUBLIC_URL}/home`} component={Home} />

          <Header>


            {/* <Route exact path={`${process.env.PUBLIC_URL}/graph`} component={GraphBuilder} />
                <Route exact path={`${process.env.PUBLIC_URL}/grapheditor`} component={GraphEditor} />
                <Route exact path={`${process.env.PUBLIC_URL}/chat`} component={gptAPIwindow} /> */}
            <Route exact path={`${process.env.PUBLIC_URL}/factsheet/new`} component={FactsheetFormContainer} />

          </Header>
        </Switch>

        {/* </PageScrollTop> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
