

// const express = require("express");
// const app = express();

// const { selectUser } = require("./user")

// http://localhost:5000/users

// app.get("/users",async (req, res) => {
//     const list = await selectUser();

// //   let obj = { message:"Hello world" };
//      res.json(list);
// });


// app.listen(4000, () =>  
//   console.log("Server started")
// );


const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());
const { addUser , selectUser} = require("./user.js")

const cors = require("cors");
app.use(cors());

app.post("/add-user", async (req, res) => {


    const user = req.body;
    await addUser(user);
    res.json({ message: "User Added Successfully" });

    //const list1 = await selectuser();
    //res.json(list1);
   // let obj = { messages: "jadhav sachian afbcaksbckja" };
    //res.json(obj);
    //res.json(list1);


});

app.get("/users", async (req, res) => {
    const list = await selectUser();
    res.json(list);
  });

app.listen(4000, () => console.log("server started"));

