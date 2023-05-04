// This is the array for all the drinks on the menu
console.log(coffeeMenu)

// This is the array for all the drinks that cost $5 and under
const fiveUnder = coffeeMenu.filter(drinks => drinks.price <= 5);

console.log(fiveUnder)

// This is the array for drinks priced at an even number
const evenPrice = coffeeMenu.filter(drinks => drinks.price % 2 == 0);

console.log(evenPrice)

// This is the array for the total if you were to order one of every drink
// First we make an array of only the prices
const drinkPrice = coffeeMenu.map(price => price.price);

// Then we use map function to add all the objects in the drinkPrice array

const drinkPriceTotal = drinkPrice.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(drinkPriceTotal)

// This is the array for all the seasonal drinks
const seasonalDrink = coffeeMenu.filter(seasonalDrinks => seasonalDrinks.seasonal == true);

console.log(seasonalDrink)

// This is the array for all the seasonal drinks "with imported beans"
// First we make an array of only the names

const seasonalDrinkNames = seasonalDrink.map(nameS => nameS.name);

// Now we make an object loop that will print all the names with "imported beans"

for (const name in seasonalDrinkNames) {
    console.log(seasonalDrinkNames[name] + " with imported beans")
}