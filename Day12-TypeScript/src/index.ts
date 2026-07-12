const container = document.querySelector(".container");


type meal = {
  strMeal: string,
  strMealThumb: string,
  idMeal: string,
  strArea: string,
  strCountry: string
}
type dataReturn = {
  meals: meal[];

}
fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
  .then((data) => {
    return data.json()
  })
  .then((data) => {
    return ShowData(data)
  })

function ShowData(data: dataReturn) {
  data.meals.map((elm) => {
    if (elm) {
      if (container) {
        container.innerHTML += `
         <div class="card bg-white w-80 p-5 shadow-2xl rounded-2xl text-center">
            <img class="w-full h-48 object-cover" src="${elm.strMealThumb}" alt="${elm.strMeal}">
            <div class="p-4 text-center">
                <h2 class="text-xl font-bold mb-2">Meal: ${elm.strMeal}</h2>
                <p class="text-gray-600">National of this Meal: ${elm.strArea}</p>
                <p class="text-gray-600">Come From: ${elm.strCountry}</p>
                <a href="#" class="inline-block mt-3 px-4 py-2 bg-blue-800 text-white rounded-xl hover:cursor-pointer hover:bg-blue-900 transition">Order</a>         
            </div>
          </div>

        `}

    }
  })

}

