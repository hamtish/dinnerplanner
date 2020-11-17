const DetailsView=({dish, guests, dishAdded, addLabel, isDishInMenu, cancel:[cancelCallback, cancelLabel], h})=>
    <div>
        <button onClick={(event)=> dishAdded(dish)}disabled={isDishInMenu}>{addLabel}</button>
        <button onClick={(event)=> cancelCallback()}>{cancelLabel}</button>
        <div class="details">
            <img height="100px" src={dish.image}/>
            <div class="detailsPriceText">
                Price: {dish.pricePerServing}
                <div>for {JSON.stringify(guests)} guests: {guests*dish.pricePerServing}</div>
            </div>
        </div>
        <div class="detailsIngredientsText">
            {dish.extendedIngredients.map(k=>
                <div key={k.id} >{k.name} {k.amount.toFixed(2)} {k.unit}</div>)}
        </div>
        <div  class="instructions">
            {dish.instructions}
        </div>
        <div>
            <a href={dish.sourceUrl}>More Info!</a>
        </div>
    </div>