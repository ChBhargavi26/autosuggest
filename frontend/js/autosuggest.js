
//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8"
var API_URL="https://autosuggest-backend.onrender.com/api/autosuggest"
var searchBar = document.getElementById("search-bar")
var serachSuggestions = document.getElementById("search-suggestions");
//get user type data
    //use user type data in the query in the API call
    //API call
    //Append to all the search suggestions to div tag in the UI
searchBar.addEventListener("input", function(){
    var query = searchBar.value.trim();
    //console.log(query);
    fetchSuggestions(query);

});
function fetchSuggestions(query){
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8"
    fetch(fullAPI)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        //console.log(data);
        showSuggestions(data);
    })
    .catch(function(err){
        console.log("Error : " + err)
    })
}
function showSuggestions(data){
    var values = data.results;
    if(data.count === 0){
        serachSuggestions.innerHTML = "<div>No Matching results found</div>"
    }
    else{
        var htmlstring = "";
        for(var i = 0; i < values.length; i++){
            htmlstring += "<div><span class='suggestion-item'>" + values[i].text + "</span><span class ='item-weight'>" + values[i].weight + "</span></div>"

        }
        serachSuggestions.innerHTML = htmlstring;
    }

}