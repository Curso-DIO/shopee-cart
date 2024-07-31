import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";


const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");

const item1 = await createItem('Hotwheels Ferrari', 20.99, 88);
const item2 = await createItem('Hotwheels Lamborghini', 39.99, 3);

// Adicionei 2 itens no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// //Removendo um item do  carrinho
// await cartService.removerItemByIndex(myCart, 2);

//Removendo um item do  carrinho
await cartService.removerItemByItem(myCart, item2);
await cartService.removerItemByItem(myCart, item2);


// Mostrando a lista de itens do meu carrinho
await cartService.displayCart(myCart);

// Deletei 2 itens no carrinho
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);


await cartService.calculateTotal(myCart);