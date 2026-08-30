let searchInput = document.querySelector(`#searchInput`);
let userSelect = document.querySelector(`#userSelect`);
let dataRow = document.querySelector(`#dataRow`);

(function(){
    const recipeList = ["< choose >","carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
    "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
    "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini",
    "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili",
    "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano",
    "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple",
    "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry",
    "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit",
    "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange",
    "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate",
    "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta",
    "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake",
    "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala",
    "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup",
    "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna",
    "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts",
    "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb",
    "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];

    let selectOptions = ``;
    for (const option of recipeList) {
        selectOptions += `
        <option value="${option}">${option}</option>
        `;
    }
    userSelect.innerHTML = selectOptions;
})();

async function getRecipes(searchTerm = `Pizza`) {
    try {
        let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
        let responseData = await response.json();
        displayRecipes(responseData.data.recipes)
    } catch (err) {
        console.log(`An Error: ${err}`);
    }
}
getRecipes();

function displayRecipes(recipes) {
    let contentContainer = ``;
    for (const recipe of recipes) {
        // contentContainer += `
        // <div class="card" style="width: 18rem;">
        //     <img src="${recipe.image_url}" class="card-img-top" alt="${recipe.title}">
        //     <div class="card-body">
        //         <h2 class="card-title">${recipe.title}</h2>
        //         <p class="card-text">${recipe.publisher}</p>
        //     </div>
        // </div>
        // `;
        contentContainer += `
        <div class="col-md-4">
        <div class="recipe-card">
                <img src="${recipe.image_url}" alt="${recipe.title}">
        <div class="recipe-content">
            <h2 class="recipe-title">
                ${recipe.title}
            </h2>
            <p class="recipe-publisher">
                By ${recipe.publisher}
            </p>
        </div>
    </div>
</div>
    `;
    }
    dataRow.innerHTML = contentContainer;
}

searchInput.addEventListener(`input`, function(e){
    getRecipes(e.target.value.toLowerCase());
})

userSelect.addEventListener(`change`, function(e){
    getRecipes(e.target.value.toLowerCase());
})
