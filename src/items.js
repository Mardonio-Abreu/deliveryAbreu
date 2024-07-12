export const products = [
     
        {
            id: 0,
            item:"Alkaseltzer",
            descripion:"caja con 6 unidades",
            price:30,
            stock: 100,
            contentImage:"alkaseltzer.jpg",
            thumbnail: "thumbnailAlkaseltzer.jpg"

        },
        {
            id: 1,
            item:"aspirina",
            descripion:"paquete con 30 unidades",
            price: 50,
            stock: 150,
            contentImage:"aspirina.jpg",
            thumbnail: "thumbnailAspirina.jpg"
        },
        {
            id: 2,
            item:"vitaminas",
            descripion:"complejo B",
            price: 128,
            stock: 352,
            contentImage:"vitaminas.jpg",
            thumbnail: "thumbnailVitaminas.jpg"
        },
    
    

    
        {
            id:3,
            item:"Hamburguesa",
            descripion:"hambueguesa con queso",
            price: 60,
            stock: 20,
            contentImage: "hamburguesa.jpg",
            thumbnail: "thumbnailHamburguesa.jpg"
        },
        {
            id: 4,
            item:"Hotdog",
            descripion:"Hotdog con tocino",
            price: 35,
            stock: 25,
            contentImage:"hotdog.jpg",
            thumbnail: "thumbnailHotdog.jpg"
        },
        {
            id: 5,
            item:"Pizza",
            descripion: "PIzza de peperoni",
            price: 150,
            stock: 36,
            contentImage:"pizza.jpg",
            thumbnail: "thumbnailPizza.jpg"
        },
    
    
        {
            id: 6,
            item: "Azucar",
            descripion:"Un kilogramo de azucar",
            price: 26,
            stock: 100,
            contentImage: "azucar.jpg",
            thumbnail: "thumbnailAzucar.jpg"
        },
        {
            id: 7,
            item:"Ariel",
            descripion:"detergente para ropa, 1 kg",
            price: 75,
            stock: 50,
            contentImage: "detergente.jpg",
            thumbnail: "thumbnail.jpg"
        },
        {
            id: 8,
            item: "refrescos",
            descripion: "1 sprite, 1 Coca Cola, 1 Fanta",
            price: 60,
            stock: 150,
            contentImage: "refrescos.jpg",
            thumbnail: "thumbnailRefrescos.jpg"
        }
    
 ];
 

 export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products)
    }, 500)
  })
}

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log({products, id})
      const product = products.find((p) => p.id === id)
      if (product) return resolve(product)
         return reject({ error: 'No encontrado' })
    }, 500)
  })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({products, id})
        const product = products.filter( (product) => {
          return product.category == category

        })
               
        if (product) return resolve(product)
           return reject({ error: 'No encontrado' })
      }, 500)
    })
  }

