function compareIngredients(a,b){
    if(a.aisle < b.aisle)
        return -1;
    else if (a.aisle > b.aisle)
        return 1;

    if(a.name < b.name)
        return -1;
    else if (a.name > b.name)
        return 1;
    else
        throw "Ingredients should be unique";
}


const SummaryView= ({guests, ingredients, nav:[navCallback, navLabel], h}) =>
    <div title="summary">
        Dinner for <span>{guests}</span> guests:
        <button onClick={(event)=> navCallback()}>{navLabel}</button>
        <table class="table-bordered">
            <thead>
            <tr>
                <th>Ingredient</th><th>Aisle</th><th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {ingredients.sort(compareIngredients).map((i)=>
                <tr key={i.name}>
                    <td>{i.name}</td>
                    <td>{i.aisle}</td>
                    <td>{i.amount*guests}</td>
                </tr>
            )}
            </tbody>
        </table>
    </div> ;