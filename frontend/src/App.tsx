import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import { myContext } from './context/Context';
import Admin from './components/Admin';
import AddRecipe from './pages/AddRecipe';
import RecipeIndex from './pages/RecipeIndex';

const App = () => {
  const ctx = useContext(myContext);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="/recipeindex" element={<RecipeIndex />} />
            {ctx ? (
              <>
                {ctx.isAdmin ? (
                  <Route path="admin" element={<Admin />} />
                ) : null}
                <Route path="logout" />
                <Route path="/addrecipe" element={<AddRecipe />} />
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
};

export default App;
