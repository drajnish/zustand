import { useEffect } from 'react';
import useCounter from '../store/use-counter';

function Recipes() {
  const fetchRecipes = useCounter((state) => state.fetchListOfRecipes);
  const recipeList = useCounter((state) => state.listOfRecipes);

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>List of Recipes</h1>
      <ul className="flex flex-wrap justify-center">
        {recipeList?.length > 0 ? (
          recipeList.map((recipe) => (
            <div key={recipe?.id}>
              <p>{recipe?.name}</p>
              <img className="w-48 m-2" src={recipe?.image} />
            </div>
          ))
        ) : (
          <h4>No Recipe available</h4>
        )}
      </ul>
    </div>
  );
}

export default Recipes;
