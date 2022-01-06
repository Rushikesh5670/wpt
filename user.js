const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
    host: "localhost",
    user: "root",
    password: "cdac",
    database: "project1",
  };


async function connectionCheck(){
   const connection = mysql.createConnection(dbinfo);
   await connection.connectAsync();
   console.log("Connection success!!!");
   await connection.endAsync();
}

async function addUser(user1){
    const connection = mysql.createConnection(dbinfo);
   await connection.connectAsync();
   console.log("Connection success!!!");

   let sql = `INSERT INTO user1(username,password) VALUES (?,?)`;
   await connection.queryAsync(sql,[user1.username,user1.password]);
   await connection.endAsync();
   console.log("Record added!");
}

async function selectUser(user1){
    const connection = mysql.createConnection(dbinfo);
   await connection.connectAsync();
   console.log("Connection success!!!");

   let sql = `select * from user1`;
   const list = await connection.queryAsync(sql,[]);
   await connection.endAsync();

   console.log(list);
   return list;
}

selectUser();

module.exports = {selectUser, addUser };

// const user1 = {
//     username:'Rushi',
//     password:'password'
// };

// addUser(user1);

// connectionCheck();



// console.log("Hello world");