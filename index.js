const express = require('express')
const app = express()
const port = 3000
const student = require("./student.json")
// console.log(student);

app.use (express.json());


// const student = [
//     { 
//         id : 1,
//       studentFirstName: "John", 
//       collegeName: "IIT",
//       location: "Mumbai" 
//     },
//     {
//          id : 2,
//         studentFirstName: "Mukesh", 
//         collegeName: "IIT",
//         location: "BHU" 
//     },
//     {
//         id : 3,
//        studentFirstName: "Sukesh", 
//        collegeName: "IIT",
//        location: "Madras" 
//    },
//    {
//     id : 4,
//    studentFirstName: "Subham", 
//    collegeName: "IIT",
//    location: "Delhi" 
// },
//  ]

  app.get("/student/getDetail", (req, res) => {
    res.json(student)
     });

  app.post('/student/add', (req, res) => {
      const {id,studentFirstName,collegeName,location} = req.body;
      student.push ({id,studentFirstName,collegeName,location});
      res.json({msg:"Added detail Successfully"});
  });

app.listen(port, () => {
  console.log( ` app listening at http://localhost:${port}`)
})