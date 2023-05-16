const dbConnect = require('./db');

// dbConnect().then((res) => {
//     res.find().toArray().then((data) => {
//         console.warn(data)
//     })
// })
// console.warn(dbConnect())

const main = async () => {
    let data = await dbConnect();
    data = await data.find({name:'xyz'}).toArray();
    console.warn(data);
}
main();