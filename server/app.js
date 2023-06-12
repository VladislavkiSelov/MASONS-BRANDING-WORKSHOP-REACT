import express from 'express';
import cors from 'cors';
import { tShirts } from './data.js';
import bodyParser from 'body-parser'
import { jeans } from './data.js';
import { sweatshirts } from './data.js';
import { jacket } from './data.js';
import { tracksuits } from './data.js';
import { winterShoes } from './data.js';
import { sneakers } from './data.js';
import { bags } from './data.js';

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, function () {
    console.log('we started server on ' + PORT);
});


function condition(categoryId) {
    if (categoryId === 'tShirts') {
        return tShirts
    }
    if (categoryId === 'jeans') {
        return jeans
    }
    if (categoryId === 'sweatshirts') {
        return sweatshirts
    }
    if (categoryId === 'jacket') {
        return jacket
    }
    if (categoryId === 'tracksuits') {
        return tracksuits
    }
    if (categoryId === 'winterShoes') {
        return winterShoes
    }
    if (categoryId === 'sneakers') {
        return sneakers
    }
    if (categoryId === 'bags') {
        return bags
    }
}

function ratingNext(request, response) {
    let categoryId = request.query.categoryId
    let length = request.query.length
    let offset = request.query.offset
    let currentArray = undefined;
    currentArray = condition(categoryId)
    let resultLength = (length * 1) + (offset * 1)
    let result = currentArray.slice(offset, resultLength)
    response.send({ data: result, nextOffset: (request.query.offset * 1) + (request.query.length * 1), arrayLength: currentArray.length });
}

function ratingPrev(request, response) {
    let categoryId = request.query.categoryId
    let length = request.query.length
    let offset = request.query.offset
    let currentArray = undefined;
    currentArray = condition(categoryId)
    let arrayNew = currentArray.filter((item, i) => { return i < (((offset * 1) - (length * 1))) })
    let result = arrayNew.reverse().slice(0, (length * 1)).reverse();
    response.send({ data: result, nextOffset: (request.query.offset * 1) - (request.query.length * 1), arrayLength: currentArray.length });
}

function CheapExpensiveNext(request, response) {
    let categoryId = request.query.categoryId
    let length = request.query.length
    let offset = request.query.offset
    let currentArray = undefined;
    currentArray = condition(categoryId)
    let newCurrentArray = [...currentArray]
    newCurrentArray.sort((a, b) => a.price - b.price)
    let resultLength = (length * 1) + (offset * 1)
    let result = newCurrentArray.slice(offset, resultLength)
    response.send({ data: result, nextOffset: (request.query.offset * 1) + (request.query.length * 1), arrayLength: currentArray.length });
}

function CheapExpensivePrev(request, response) {
    let categoryId = request.query.categoryId
    let length = request.query.length
    let offset = request.query.offset
    let currentArray = undefined;
    currentArray = condition(categoryId)
    let newCurrentArray = [...currentArray]
    newCurrentArray.sort((a, b) => a.price - b.price)
    let arrayNew = newCurrentArray.filter((item, i) => { return i < (((offset * 1) - (length * 1))) })
    let result = arrayNew.reverse().slice(0, (length * 1)).reverse();
    response.send({ data: result, nextOffset: (request.query.offset * 1) - (request.query.length * 1), arrayLength: currentArray.length });
}

function ExpensiveCheapNext(request, response) {
    let categoryId = request.query.categoryId
    let length = request.query.length
    let offset = request.query.offset
    let currentArray = undefined;
    currentArray = condition(categoryId)
    let newCurrentArray = [...currentArray]
    newCurrentArray.sort((a, b) => b.price - a.price)
    let resultLength = (length * 1) + (offset * 1)
    let result = newCurrentArray.slice(offset, resultLength)
    response.send({ data: result, nextOffset: (request.query.offset * 1) + (request.query.length * 1), arrayLength: currentArray.length });
}

function ExpensiveCheapPrev(request, response) {
    let categoryId = request.query.categoryId
    let length = request.query.length
    let offset = request.query.offset
    let currentArray = undefined;
    currentArray = condition(categoryId)
    let newCurrentArray = [...currentArray]
    newCurrentArray.sort((a, b) => b.price - a.price)
    let arrayNew = newCurrentArray.filter((item, i) => { return i < (((offset * 1) - (length * 1))) })
    console.log(arrayNew);
    let result = arrayNew.reverse().slice(0, (length * 1)).reverse();
    response.send({ data: result, nextOffset: (request.query.offset * 1) - (request.query.length * 1), arrayLength: currentArray.length });
}

//Первая загрузка (по рейтингу)
app.get('/api/category', (request, response) => {
    ratingNext(request, response)
});

app.get('/api/category/next', (request, response) => {
    ratingNext(request, response)
});

app.get('/api/category/prev', (request, response) => {
    ratingPrev(request, response)
});


// (От дешевых к дорогим)
app.get('/api/category/CheapExpensive', (request, response) => {
    CheapExpensiveNext(request, response)
});

app.get('/api/category/CheapExpensive/Next', (request, response) => {
    CheapExpensiveNext(request, response)
});


app.get('/api/category/CheapExpensive/Prev', (request, response) => {
    CheapExpensivePrev(request, response)
});

// (От дорогих к дешевым)

app.get('/api/category/ExpensiveCheap', (request, response) => {
    ExpensiveCheapNext(request, response)
});

app.get('/api/category/ExpensiveCheap/Next', (request, response) => {
    ExpensiveCheapNext(request, response)
});

app.get('/api/category/ExpensiveCheap/Prev', (request, response) => {
    ExpensiveCheapPrev(request, response)
});

//по id
app.get('/api/category/:id/', (request, response) => {
    let categoryId = request.query.categoryId
    const productId = request.params.id;
    let currentArray = undefined;
    currentArray = condition(categoryId)
    const result = currentArray.find((item) => item.id == productId)
    response.send(result);
});

//принимаю данные от пользователя
app.post('/api/dataOrders', (request, response) => {
    console.log(request.body);
    response.send('ok');
})

app.post('/api/emailPerson', (request, response) => {
    console.log(request.body);
    response.send('ok');
})

app.post('/api/contactUs', (request, response) => {
    console.log(request.body);
    response.send('ok');
})
