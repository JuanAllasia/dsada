const products = [
{
    id: '1',
    name: 'remera1',
    price: 1000,
    category: 'Remeras',
    img: '',
    stock: 10,
    description: 'remera1'
},
{
    id: '2',
    name: 'remera2',
    price: 1000,
    category: 'Remeras',
    img: '',
    stock: 10,
    description: 'remera2'
},
{
    id: '3',
    name: 'remera3',
    price: 1000,
    category: 'Remeras',
    img: '',
    stock: 10,
    description: 'remera3'
},
{
    id: '4',
    name: 'pantalon1',
    price: 1000,
    category: 'Pantalones',
    img: '',
    stock: 10,
    description: 'pantalon1'
}

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    }) 
}


export const getProductsByCategory = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
});
};
