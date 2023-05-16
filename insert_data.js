const dbConnect = require('./db');

const insertData = async () => {
    let db = await dbConnect();
    // let result = await db.insertOne(
    //     {category: "syrup", name: "cough-syrup", price: 78, quantity: 12}
    // )
    let result = await db.insertMany(
        [
            {category: "syrup", name: "cough-syrup", price: 78, quantity: 12},
            {category: "homeopethic", name: "xyz", price: 83, quantity: 9},
            {category: "tablets", name: "biotin", price: 56, quantity: 10}
        ]
    )
    if(result.acknowledged)
    {
        console.warn("data is inserted")
    }};
// insertData();
