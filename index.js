const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

 
app.use(cors())

const categories = require('./data/categories.json')
const  learning = require('./data/learning.json')

app.get('/', (req, res) => {
    res.send('my server site')
})

app.get('/subject-categories', (req, res) =>{
    res.send(categories)

})

app.get('/learning', (req, res) =>{
    res.send(learning)

}) 

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const category_learning = learning.filter(l => parseInt(l.category_id )=== parseInt(id));
        res.send(category_learning)
});

app.get('/learning/:id', (req, res) => {
    const id = req.params.id
    const selectedItem = learning.find(l => parseInt(l._id) === parseInt(id));
    
    res.send(selectedItem)
})


app.listen(port, () => {
    console.log('Example app listening on port', port);
});