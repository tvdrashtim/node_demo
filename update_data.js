const dbConnect = require('./db');

const updateData = async () => {
    let db = await dbConnect();
    // let result = await db.updateOne(           //update one
    let result = await db.updateMany(             //update many
        {name: 'cough-syrup'},{
            $set: {price: 700, quantity: 40}
        }
    )
}
updateData();
