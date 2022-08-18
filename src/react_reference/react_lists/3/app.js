import React,{useState,useEffect,useContext} from 'react';
import './custom.css'
import uuidv4 from 'uuid/v4'

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

const sampleRecipes = [
    {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookTime: '1:45',
      instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          amount: '2 Pounds'
        },
        {
          id: 2,
          name: 'Salt',
          amount: '1 Tbs'
        }
      ]
    },
    {
      id: 2,
      name: 'Plain Pork',
      servings: 5,
      cookTime: '0:45',
      instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
      ingredients: [
        {
          id: 1,
          name: 'Pork',
          amount: '3 Pounds'
        },
        {
          id: 2,
          name: 'Paprika',
          amount: '2 Tbs'
        }
      ]
    }
  ]  


export default function CustomApp() {
    const [recipes, setRecipes] = useState(sampleRecipes)

    
    useEffect(() => {
        const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
      }, [])
    
      useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
      }, [recipes])
    
      const recipeContextValue = {
        handleRecipeAdd,
        handleRecipeDelete
      }
    
      function handleRecipeAdd() {
        const newRecipe = {
          id: uuidv4(),
          name: 'New',
          servings: 1,
          cookTime: '1:00',
          instructions: 'Instr.',
          ingredients: [
            { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
          ]
        }
    
        setRecipes([...recipes, newRecipe])
      }
    
      function handleRecipeDelete(id) {
        setRecipes(recipes.filter(recipe => recipe.id !== id))
      }
    return (
        <RecipeContext.Provider value={recipeContextValue}>
            <RecipeList recipes={recipes} />
            <RecipeEdit />
        </RecipeContext.Provider>
    )
  }
  
  

// start Ingredient
function Ingredient({name,amount}){
    return(
        <div className="ingredient-grid">
         <span>{name}</span>
         <br/>
         <span>{amount}</span>
        </div>
    )
}

function IngredientList({ingredients}){
    const ingredientElements  = ingredients.map(ingredient => {
        return <Ingredient key={ingredient.id} {...ingredient}/>
    })
    return(
        <>
        {ingredientElements}
        </>
    )
}
// end Ingredient

// start recipe
function RecipeList({recipes}){
    const { handleRecipeAdd } = useContext(RecipeContext)
    return(
        <div className="recipe-list">
        <div>
          {recipes.map(recipe => {
            return (
              <Recipe key={recipe.id} {...recipe} />
            )
          })}
        </div>
        <div className="recipe-list__add-recipe-btn-container">
          <button
            className="btn btn--primary"
            onClick={handleRecipeAdd}
          >
            Add Recipe
          </button>
        </div>
      </div>
    )
}
function Recipe(props){

    const {id,name,cookTime,servings,ingredients,instructions,handleRecipeDelete} = props
    return(
        <div className="recipe">
        <div className="recipe__header">
          <h3 className="recipe__title">{name}</h3>
          <div>
            <button className="btn btn--primary mr-1">Edit</button>
            <button
              className="btn btn--danger"
              onClick={() => handleRecipeDelete(id)}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Cook Time:</span>
          <span className="recipe__value">{cookTime}</span>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Servings:</span>
          <span className="recipe__value">{servings}</span>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Instructions:</span>
          <div className="recipe__value recipe__instructions recipe__value--indented">{instructions}</div>
        </div>
        <div className="recipe__row">
          <span className="recipe__label">Ingredients:</span>
          <div className="recipe__value recipe__value--indented">
            <IngredientList ingredients={ingredients} />
          </div>
        </div>
      </div>
    )
}
function RecipeEdit(){
    <div className="recipe-edit">
    <div>
      <button>&times;</button>
    </div>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <label htmlFor="cookTime">Cook Time</label>
      <input type="text" name="cookTime" id="cookTime" />
      <label htmlFor="servings">Servings</label>
      <input type="number" min="1" name="servings" id="servings" />
      <label htmlFor="instructions">Instructions</label>
      <textarea name="instructions" id="instructions"></textarea>
    </div>
    <br />
    <label>Ingredients</label>
    <div>
      <div>Name</div>
      <div>Amount</div>
      <div></div>
      <RecipeIngredientEdit />
      <RecipeIngredientEdit />
    </div>
    <div>
      <button>Add Ingredient</button>
    </div>
  </div>
}
// end recipe

// start recipe ingredient
function RecipeIngredientEdit(){
    return(
        <>
         <input type='text'/>
         <input type='text'/>
         <button>&times;</button>
        </>
    )
}
// end recipe ingredient