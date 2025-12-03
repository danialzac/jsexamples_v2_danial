const arrCategories = new Array( // instantiating a new Array object
    { name: "Cat A", description: "Cars below 1600cc" },
    { name: "Cat B", description: "Cars above 1600cc" },
    { name: "Cat C", description: "Goods Vehicles and Buses" }
);

console.log(arrCategories.length);

console.log(arrCategories[0].name, arrCategories[0].description);

for (let i = 0; i < arrCategories.length; i++) {
    console.log(arrCategories[i].name, arrCategories[i].description);
    
}

arrCategories.forEach((element) => {
    console.log(element.name, element.description);
});

arrCategories.push({ name: "Cat E", description: "Open" });
console.log(arrCategories);
