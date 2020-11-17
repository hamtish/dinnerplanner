const Sidebar= {
    // props to pass data from parent component to child component
    props: ["model", "dishChoice"],
    render(h){
        return SidebarView({
            h,
            guests: this.model.getNumberOfGuests(),
            dishes: this.model.getMenu(),
            setGuests: x=> this.model.setNumberOfGuests(x),
            removeDish: dish=> this.model.removeFromMenu(dish),
            setCurrentDish: dish=> this.model.setCurrentDish(dish.id),
            dishChoice: this.dishChoice
        });
    }
}