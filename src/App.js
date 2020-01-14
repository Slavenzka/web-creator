import React from 'react';
import Header from 'components/Header/Header'
import { Switch, Route } from 'react-router-dom'
import PageMain from 'Pages/PageMain/PageMain'
import Footer from 'components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={PageMain} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
