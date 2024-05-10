import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Home from './Page1';
import Page2 from './Page2';

const App = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300} // Длительность анимации в миллисекундах
              classNames="fade" // Название CSS класса для анимации
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/sale-page" component={SalePage} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Router>
  );
};
export default App;
