// Function to filter products based on search query
function filterProducts(searchQuery) {
    const productElements = document.querySelectorAll(".product");


    productElements.forEach(product => {
        const productName = product.querySelector("h2").textContent.toUpperCase();
        const displayStyle = productName.includes(searchQuery) ? "" : "none";    
        product.style.display = displayStyle;
    });
}

// Function to handle input changes
function handleInputChange() {
    const searchBox = document.getElementById("search-item");    
    const searchQuery = searchBox.value.trim().toUpperCase();
    filterProducts(searchQuery);
}

// Attach an event listener to the search input
document.getElementById("search-item").addEventListener("input", handleInputChange);
