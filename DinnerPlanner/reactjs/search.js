function Search({model, nav, resultChoice}){
    // type: current state value, setType: function that will allow
    // updating the state value.
    // useState: returns a stateful value and a func to update it
    const [type, setType]= React.useState("");
    const [query, setQuery]= React.useState("");

    const [promise, setPromise]=  React.useState(null);

    // Executes everytime the app renders
    React.useEffect(()=>setPromise(DishSource.searchDishes({})),[]);

    const [data, error]= usePromise(promise);

    // fragment to group a list of children
    return h(React.Fragment, {}
        , h(SearchFormView, {
            onText: text=>setQuery(text) ,
            onType: type=>setType(type) ,
            onSearch: ()=>setPromise(DishSource.searchDishes({type, query})),
            nav: nav
        })
        , promiseNoData(promise, data, error) ||
        h(SearchResultsView, {
            searchResults:data,
            dishChosen: dishId=> model.setCurrentDish(dishId),
            resultChoice: resultChoice
        })
    );
}
