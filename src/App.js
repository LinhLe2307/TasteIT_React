import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import AddRecipes from "./components/AddRecipes";
import BrowseRecipes from "./components/BrowseRecipes";
import Home from "./components/Home";
import RecipesInfo from "./components/RecipesInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/browse-recipes" element={<BrowseRecipes />} />
          <Route
            path="/browse-recipes/:id"
            element={<RecipesInfo />}
          />
          <Route path="/add-recipes" element={<AddRecipes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
