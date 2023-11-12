const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

function performSearch() {
    const query = searchInput.value.toLowerCase();
    const pageText = document.body.innerText.toLowerCase();

    // Clear previous search results
    searchResults.innerHTML = "";

    const regex = new RegExp(query, "gi");

    // Use the regular expression to find and highlight matching words in the page text
    const matches = pageText.match(regex);

    if (matches) {
        const uniqueMatches = [...new Set(matches)]; // Remove duplicate matches
        searchResults.innerHTML = `Found ${uniqueMatches.length} matches: ${uniqueMatches.join(", ")}`;
    } else {
        searchResults.innerHTML = "No matches found.";
    }
}

searchButton.addEventListener("click", performSearch);

searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        performSearch();
    }
});
