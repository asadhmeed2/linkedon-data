
use('test-db');

// db.linkedon.find({})

//ex1
// db.linkedon.count({
//     salary:{$gt:25000}
// })


//ex2
// db.linkedon.find({},{
//     firstName:1,salary:1,_id:0
// }).sort({salary: -1}).limit(3)

//ex3
// db.linkedon.count({"currentCompany.name":"Walmart",
//     salary: {$gte:7000}
// })


