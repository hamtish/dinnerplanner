const SearchResultsView= ({searchResults, dishChosen, resultChoice, h})=>
    <div > {
            // map for creating new array w results and print
        searchResults.map(dish=>
            <span key={dish.id} class="searchResult" onClick={(event)=> {dishChosen(dish.id), resultChoice()}}>
            <li>{dish.title}</li>
            <img height="100px" src={`https://spoonacular.com/recipeImages/${dish.image}`}/>
        </span>)
    } </div>

const SearchFormView= ({onSearch, onType, onText, nav:[navCallback, navLabel], h})=>
    <div>
        <input type={"text"} onChange={(event)=> onText(event.target.value)}/>

        <select name="box" id="testing" onChange={(event)=> onType(event.target.value)}>
            {["starter", "main course", "dessert"].map(k=>
                <option key={k} >{k}</option>)}
        </select>

        <input type="button" value="search" onClick={(event)=> onSearch(event.target.value)}/>
        <button onClick={(event)=> navCallback()}>{navLabel}</button>
    </div>