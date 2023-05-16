const dbConnect = require('./db');

const deleteData = async () => {
    let db = await dbConnect();
    let result = await db.deleteOne(        //delete one
    // let result = await db.deleteMany(    //delete many
            { name: 'cough-syrup' }
        )
    if (result.acknowledged) {
        console.warn("data is deleted")
    }
};
// deleteData();
