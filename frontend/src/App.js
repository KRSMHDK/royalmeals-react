import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import Hero from './components/Hero';
import NewRecipe from './components/NewRecipe';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <Hero />
              <div className="container mx-auto">
                <MainContent />{' '}
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
