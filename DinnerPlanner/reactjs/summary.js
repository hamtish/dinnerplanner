function Summary({model, nav}) {
    const guests= useModelProp(model, "numberOfGuests");
    const dishes= useModelProp(model, "dishes");
    const ingredients= model.getIngredients();
    return h(SummaryView, {
        guests: guests,
        dishes: dishes,
        ingredients: ingredients,
        nav: nav
    });
}