const  DishSource={
    apiCall(params) {
        return fetch(BASE_URL+params, {
            "method": "GET",
            "headers": {
                'X-Mashape-Key' : API_KEY
            }
        })
            .then(handleHTTPError)
            .then(response => response.json())
            .catch(console.error);
    }
    ,
    searchDishes({type, query}) {
        const searchParams = new URLSearchParams();
        if (typeof type!=="undefined" && type != "null") {
            searchParams.append("type", type);
        }
        if (typeof query!=="undefined" && query != "null" && query != "undefined") {
            searchParams.append("query", query);
        }

        return this.apiCall("/recipes/search?"+searchParams)
            .then(data=>data.results);
    }
    ,
    getDishDetails(id) {
        return this.apiCall("/recipes/"+id+"/information");
    }

};

function handleHTTPError(response) {
    if(response.ok)
        return response;
    throw Error(response.statusText);
}