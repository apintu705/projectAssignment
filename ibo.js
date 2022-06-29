const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  },
  {
    productName: "FAN",
    quantity: 50,
    description: "ceiling Fan"
  }
];


function getUniqueProductCount(listOfProducts){
    let ans={}
    for(let i=0; i<listOfProducts.length; i++){
        if(ans[listOfProducts[i].productName]===undefined){
            ans[listOfProducts[i].productName]=1;
        }
        else{
            
            ans[listOfProducts[i].productName]=ans[listOfProducts[i].productName]+1;
        }
    }
    return ans;
}
console.log(getUniqueProductCount(listOfProducts))

function getUniquePrducts(listOfProducts){
    for(let i=0; i<listOfProducts.length; i++){
        for(let j=i+1; j<listOfProducts.length; j++){
            if(listOfProducts[i].productName===listOfProducts[j].productName
              &&listOfProducts[i].description===listOfProducts[j].description){
                listOfProducts[i].quantity=listOfProducts[i].quantity+listOfProducts[j].quantity;
                listOfProducts.splice(j,1);
                j--;
            }
        }
    }
    return listOfProducts;

}
console.log(getUniquePrducts(listOfProducts))



