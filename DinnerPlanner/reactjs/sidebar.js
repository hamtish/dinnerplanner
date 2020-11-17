function Sidebar({model, dishChoice}) {
    const guests= useModelProp(model, "numberOfGuests");
    const dishes= useModelProp(model, "dishes");
    return h(SidebarView, {
        guests: guests,
        setGuests: n=> model.setNumberOfGuests(n),
        dishes: dishes,
        removeDish: dish=> model.removeFromMenu(dish),
        setCurrentDish: dish=> model.setCurrentDish(dish.id),
        dishChoice: dishChoice
    });
}