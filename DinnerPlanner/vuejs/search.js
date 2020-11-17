const Search={
    // props to pass data from parent component to child component
    props: ["model","nav", "resultChoice"],
    data(){
        return {
            promise: DishSource.searchDishes({}),
            data:null,
            error:null,
            text: "",
            type: ""
        };
    },
    created(){
        this.promise.then(dt=>this.data=dt).catch(er=>this.error=er);
    },
    render(h){  return h("div", {}, [
        h(SearchFormVue,{
            props: {
                onSearch: (tp, txt)=> {this.promise=DishSource.searchDishes({type:tp, query:txt});
                    this.data=null;
                    this.error=null;
                    this.promise.then(dt=>this.data=dt).catch(er=>this.error=er)},
                nav: this.nav
            }
        } ),
        promiseNoData(this.promise, this.data, this.error, h) ||
        SearchResultsView( {
            h,
            searchResults: this.data,
            dishChosen: dishId=> this.model.setCurrentDish(dishId),
            resultChoice: this.resultChoice
        })
    ]); }
}