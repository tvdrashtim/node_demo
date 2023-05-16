const express = require('express');
const dbConnect = require('./db');
const app = express();
const mongodb = require('mongodb');

app.use(express.json());

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    res.send(data);
});

app.post('/', async (req, res) => {
    let data = await dbConnect();
    result = await data.insertOne(req.body);
    res.send(result);
});

app.put('/', async (req, res) => {
    let data = await dbConnect();
    result = await data.updateOne(
        { name: req.body.name },
        { $set: req.body }
    )
    res.send({ result: "updated" })
})

//update using params
// app.put('/:name', async (req, res) => {
//     let data = await dbConnect();
//     result = await data.updateOne(
//         {name: req.params.name},
//         { $set: req.body }
//     )
//     res.send({ result: "updated"})
// })

app.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    let data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.send(result)
})

app.listen(3000)