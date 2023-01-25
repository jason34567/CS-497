let requestURL = "https://fakestoreapi.com/products?limit=10"

fetch(requestURL)
    .then((res) => {return res.json()})
    .then((data) =>  {
        console.log(data)
        populateList(data)
    
    populateList(productList.filter((product) => product.title.includes('')));
    });



let productData = document.getElementById("productData")
function populateList(product){
    console.log(product);
    let stringProduct= '';
    stringProduct = 
    
    productData.innerHTMLML = stringProduct;
}
// populateList();