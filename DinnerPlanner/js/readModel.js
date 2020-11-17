function readModel() {
    const modelString= localStorage.getItem("dinnerModel");
    let modelObject= {};
    if (modelString)
        // parses a string and returns a JavaScript obj
        modelObject= JSON.parse(modelString);


    const model = new DinnerModel(modelObject.guests, modelObject.dishes, modelObject.currentDish);
    model.addObserver(()=>{localStorage.setItem("dinnerModel",
        JSON.stringify({
            guests: model.getNumberOfGuests(),
            dishes: model.getMenu(),
            currentDish: model.currentDish
        })
    )});
    return model;
}