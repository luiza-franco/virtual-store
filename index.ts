import express from 'express'
import {v4 as uuidv4} from 'uuid'

const app = express()
app.use(express.json())

interface Product {
  id: string;
  title: string;
  description: string;
  value: string;
  image: string;
}

let products: Product[] = []

  app.get('/products', function (req, res) {
    res.json(products);
  });

  app.get('/products/:id', function (req, res) {
    const id = req.params.id
    const product = products.find((element) => {
      return element.id === id
    } )
    res.json(product);
  });
   
  app.post('/products', function (req, res) {
    const product = {
      id: uuidv4(), 
      title: req.body.title,
      description: req.body.description,
      value: req.body.value,
      image: req.body.image,
    };
    products.push(product)
    res.json(product);
  });
   
  app.put('/products/:id', function (req, res) {
    const id = req.params.id
    const index = products.findIndex((element: any) => element.id === id)
    if (index === -1) {
      throw new Error ("Product does not exist!");
    }
 
    if (req.body.value) {
      products[index].value = req.body.value
    } 
    if (req.body.title) {
      products[index].title = req.body.title
    } 
    if (req.body.description) {
      products[index].description = req.body.description
    } 
    if (req.body.image) {
      products[index].image = req.body.image
    } 

    res.send(`editar o produto ${req.params.id}`);
  });
   
  app.delete('/products/:id', function (req, res) {
    const id = req.params.id
    const index = products.findIndex((element: any) => element.id === id)
    if (index === -1) {
      throw new Error ("Product does not exist!");
    }
    products.splice(index, 1)
    res.json(products)
})

  app.listen('3000', () => console.log('servidor rodando'))
