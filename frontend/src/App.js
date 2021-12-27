import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MainHeader from './components/MainHeader';

import Register from './components/Register';
import Login from './components/Login';

import { useContext } from 'react';
import { myContext } from './context/Context';
import Admin from './components/Admin';
import AddRecipe from './pages/AddRecipe';
import RecipeIndex from './pages/RecipeIndex';

function App() {
  const ctx = useContext(myContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/addrecipe" element={<AddRecipe />} />
            <Route path="/recipeindex" element={<RecipeIndex />} />
            {ctx ? (
              <>
                {ctx.isAdmin ? (
                  <Route path="admin" element={<Admin />} />
                ) : null}
                <Route path="logout"></Route>
              </>
            ) : (
              <>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
              </>
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
