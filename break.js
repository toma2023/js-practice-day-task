for(var i = 30; i <= 86; i++){
    // console.log(i);
    if(i > 44){
        break;
    }
   
}
var booksPrice = [150, 120, 90, 30, 200, 180, 170, 270, 400, 900, 260]
for(var i = 0; i < booksPrice.length; i++){
   var price = booksPrice[i];
    
    if(price > 200){
        continue;
    }
    console.log(price);
}