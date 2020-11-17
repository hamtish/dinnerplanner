const types=["starter", "main course", "dessert"];
function dishType(dish){
    const tp= dish.dishTypes.filter(value => types.includes(value));
    if(tp.length)
        return tp[0];
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b));
    var x;
    if (ai < bi)
        x = -1;
    else if (ai > bi)
        x = 1;
    else
        x = 0;

    return x;
}

function getSum(total, dish) {
    return total + dish.pricePerServing;
}

const SidebarView= ({guests, setGuests, dishes, removeDish, setCurrentDish, dishChoice, h}) =>
    <div>
        <div><h1>Dinner Planner</h1></div>
        <div>Menu</div>
        <button onClick={()=> setGuests(guests-1)}
                disabled={guests<=1}>-</button>
        {guests}

        <button onClick={()=> setGuests(guests+1)}>+</button>
        <table>
            <tbody>
            {dishes.sort(compareDishes).map(dish=>
                <tr key={dish.id}>
                    <td><button onClick={e=> removeDish(dish)}>x</button></td>
                    <td><a id="dishTitle" href="" onClick={(event)=>{event.preventDefault(); setCurrentDish(dish); dishChoice()}}>{dish.title}</a></td>
                    <td>{dish.dishTypes[0]}</td>
                    <td>{dish.pricePerServing.toFixed(2)}</td>
                </tr>
            )}
            <tr>
                <td></td><td></td><td>Total:</td>
                <td>{(dishes.reduce(getSum, 0)*guests).toFixed(2)}</td>
            </tr>
            </tbody>
        </table>
    </div>;