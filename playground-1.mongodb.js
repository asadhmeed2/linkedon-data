
use('test-db');

// db.linkedon.count({})

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

//ex4
// db.linkedon.find({
//         "currentCompany.industry":{$in:["Sales","Retail"]}
// },{
//     _id:0,
//     "currentCompany.name":1,
//     fullName:"$firstName $lastName"
// })

// ex4
// db.linkedon.aggregate([
//     {
//         $match: {
//         "currentCompany.industry": { $in: ["Sales", "Retail"] }
//         }
//     },
//     {
//     $project: {
//         _id: 0,
//         fullname: {
//             $concat: ["$firstName", " ", "$lastName"]
//         },
//         salary: 1,
//         currentCompanyName: "$currentCompany.name"
//     }
//     },
//     {$sort:{salary:-1}}
//     ,
//     {$limit: 1}
// ])

