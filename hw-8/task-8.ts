const Ingredients = new Map([
    ['Огурцы', 300],
    ['Помидоры', 200],
    ['Соль', 10],
    ['Сметана', 110],
]);

Ingredients.forEach((value, key) => {
    if (value > 100) {
        console.log(`${key} - ${value} гр.`);
    }
});

function getNewIngredients(value: number, key: string): void {
    if (value > 100) {
        console.log(`${key} - ${value} гр.`);
    }
}

Ingredients.forEach(getNewIngredients);
