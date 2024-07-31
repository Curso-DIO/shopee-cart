
//Adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//Calcular total do carrinho
async function calculateTotal(userCart, index) {
    console.log("\nShopee cart TOTAL IS:")

    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

    console.log(`🛒 Total ${result}`)
}

//Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

//remover um item do carrinho
async function removerItemByIndex(userCart, index) {
    const deleteIndex = index - 1;

    if (index >= 0 && index <= userCart.length) {

        userCart.splice(deleteIndex, 1);
    }
}

//remover um item do carrinho
async function removerItemByItem(userCart, item) {

    // encontrar o index do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);

    if(indexFound == -1){
        console.log('Item não encontrado');
        return
    };

    if(userCart[indexFound].quantity > 1 ){
        userCart[indexFound].quantity -= 1
        return;
    };

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
    }

    console.log("item na posição:")
    console.log(indexFound)

    // if (index >= 0 && index <= userCart.length) {

    //     userCart.splice(deleteIndex, 1);
    // }
}


//remover um item do carrinho
async function displayCart(userCart) {
    console.log("\nShopee cart list:");

    userCart.forEach((element, index) => {
        console.log(`${index + 1}. ${element.name} - R$ ${element.price} | ${element.quantity}x | Subtotal = ${element.subtotal()} `)
    });
}
export {
    addItem,
    calculateTotal,
    deleteItem,
    removerItemByIndex,
    removerItemByItem,
    displayCart
}