function Details({model, ok:[addNav, addLabel], cancel}){
    const currentDish= useModelProp(model, "currentDish");

    // promise: current state value, setPromise: function that will allow
    // updating the state value.
    // useState: returns a stateful value and a func to update it
    const [promise, setPromise]= React.useState();

    // Executes everytime the app renders
    // Whenever [currentDish] changes, useEffect hook runs
    React.useEffect(
        ()=>setPromise(DishSource.getDishDetails(currentDish)),
        [currentDish]
    );

    const [data, error]= usePromise(promise);
    const guests= useModelProp(model, "numberOfGuests");
    const dishAdded= useModelProp(model, "currentDish")
    const menu= useModelProp(model, "dishes");
    const isDishInMenu= menu.find(k=>k.id==currentDish);
    return promiseNoData(promise, data, error) ||
        h(DetailsView, {
            dish: data,
            guests: guests,
            dishAdded: dish=> {model.addToMenu(dish); addNav()},
            addLabel,
            isDishInMenu: isDishInMenu,
            cancel: cancel
        });
}