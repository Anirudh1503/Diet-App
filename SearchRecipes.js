import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import axios from "axios";
import MyNavbar from "./Components/MyNavbar";
import Footer from "./Components/Footer";
import logo from "./Components/logo.png"; // Import loading image

export default function SearchRecipes() {
  const [recipeName, setRecipeName] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false); // State to manage loading status

  const fetchRecipes = (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true when fetching starts

    axios.post("http://localhost:3000/get-token").then((response) => {
      const token = response.data.access_token;

      axios
        .post("http://localhost:3000/get-recipes", { recipeName: recipeName })
        .then((response) => {
          const recipes = response.data.recipes.recipe;
          setRecipes(recipes);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false); // Set loading to false after fetching completes
        });
    });
  };

  const handleInput = (event) => {
    setRecipeName(event.target.value);
  };

  return (
    <div>
      <MyNavbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <form className="col-md- form d-flex" onSubmit={fetchRecipes}>
            <input
              className="form-control mr-2"
              name="query"
              type="text"
              placeholder="Search Food"
              value={recipeName}
              onChange={handleInput}
              style={{ marginRight: "8px" }}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="row justify-content-center mt-4">
          {loading ? ( // Conditional rendering for loading state
            <img src={logo} alt="Loading" style={{ width: "500px", height: "500px" }}/> // Display loading image
          ) : (
            recipes.map((recipe) => (
              <RecipeCard key={recipe.recipe_id} data={recipe} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
