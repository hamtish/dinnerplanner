const Summary= {
    functional:true,
    render(h, context){
        return SummaryView({
            h,
            guests: context.props.model.getNumberOfGuests(),
            dishes: context.props.model.getMenu(),
            ingredients: context.props.model.getIngredients(),
            nav: context.props.nav
        });
    }
}