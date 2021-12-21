import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import Hero from './components/Hero';
import NewRecipe from './components/NewRecipe';
import Register from './components/Register';
import Login from './components/Login';

import { useContext } from 'react';
import { myContext } from './pages/Context';
import Admin from './components/Admin';

function App() {
  const ctx = useContext(myContext);
  return (
    <div>
      <Router>
        <Switch>
          <Layout>
            {ctx ? (
              <>
                {ctx.isAdmin ? (
                  <Route exact path="/admin">
                    <Admin />
                  </Route>
                ) : null}
                <Route exact path="/logout"></Route>
              </>
            ) : (
              <>
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </>
            )}
            <Route exact path="/">
              <Hero />
              <div className="container px-20 mx-auto">
                <MainContent />
              </div>
            </Route>
            <Route exact path="/addrecipe">
              <NewRecipe />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
