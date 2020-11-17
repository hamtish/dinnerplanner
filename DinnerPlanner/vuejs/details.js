const Details={
    // props to pass data from parent component to child component
    props:["model", "ok", "cancel"],
    data(){
        return {
            promise: null,
            data:null,
            error:null
        };
    },
    watch:{
        'model.currentDish': {
            immediate:true,
            handler(){
                this.promise= this.model.currentDish && DishSource.getDishDetails(this.model.currentDish);
                this.data=null;
                this.error=null;
                if(this.promise)this.promise.then(dt=>this.data=dt).catch(er=>this.error=er);
            }
        }
    },
    render(h){
        return promiseNoData(this.promise, this.data, this.error, h) ||
            DetailsView({h,
                dish: this.data,
                guests: this.model.getNumberOfGuests(),
                dishAdded: dish=> {this.model.addToMenu(dish); this.ok[0]},
                addLabel: this.ok[1],
                isDishInMenu: this.model.getMenu().find(k=>k.id==this.model.currentDish),
                cancel: this.cancel});
    }
};