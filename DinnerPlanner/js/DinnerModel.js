class DinnerModel {
    constructor(guests=2, dishes=[], currentDish=null) {
        this.subscribers=[];
        this.numberOfGuests=guests;
        this.dishes = dishes;
        this.currentDish=currentDish;
    }

    getIngredients() {
        const result={};
        this.dishes.forEach(d=> d.extendedIngredients.forEach(i=>{
            if(!result[i.name])
                result[i.name]={...i};
            else
                result[i.name].amount += i.amount;
        }))
        return Object.values(result);
    }


    setCurrentDish(id) {
        this.currentDish = id;
        // notifies all observers that a change has happened
        this.notifyObservers();
    }

    addToMenu(dish) {
        this.dishes.find(k=> {
            if (k.id==dish.id)
                throw "Dish is already in menu.";
        });
        this.dishes=[dish, ...this.dishes];
        this.notifyObservers();
    }

    removeFromMenu(dish) {
        this.dishes = this.dishes.filter(k=>k.id != dish.id);
        this.notifyObservers();
    }

    getMenu() {
        return [...this.dishes];
    }

    setNumberOfGuests(x) {
        if(x <= 0)
            throw "Number of dinner guests cannot be zero or negative.";
        this.numberOfGuests=x;
        this.notifyObservers();
    }
    getNumberOfGuests() {
        return this.numberOfGuests;
    }
    addObserver(callback) {
        this.subscribers= this.subscribers.concat(this.callback=callback);
        return ()=>this.removeObserver(obs);
    }
    notifyObservers() {
        this.subscribers.forEach(callback=> callback());
    }
    removeObserver(obs) {
        this.subscribers= this.subscribers.filter(o=>obs)
    }
}