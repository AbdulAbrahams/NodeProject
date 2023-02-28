//connect database
const database = require("../config");
//bcrypt
let { hash, compare, hashSync } = require("bcrypt");
//token
let { createToken } = require("../middleware/AuthenticatedUser");

//CLASSES
//USER CLASS
class User {
  login(req, res) {
    const { emailAdd, userPass } = req.body;
    const strQry = `
        SELECT userID, firstName, lastName, gender, emailAdd, userPass, userRole, userProfile FROM Users WHERE emailAdd = ${emailAdd};
        `;

    database.query(strQry, async (err, data) => {
      if (err) throw err;
      if (!data || data == null) {
        res.status(401).json({ err: "Incorrect email address" });
      } else {
        await compare(userPass, data[0].userPass, (cErro, cResult) => {
          if (cErr) throw cErr;
          //create token
          const jwToken = createToken({
            emailAdd,
            userPass,
          });
          // saving tken
          res.cookie("Green_Light", jwToken, {
            maxAge: 3600000, //time limit this one is 1hour
            httpOnly: true, //makes it private
          });
          if (cResult) {
            res.status(200).json({
              msg: "Logged in",
              jwToken,
              result: data[0],
            });
          } else {
            res.status(401).json({
              err: "You entered an incorect password or not registered. Please try again",
            });
          }
        });
      }
    });
  }
  fetchUsers(req, res) {
    const strQry = `
            SELECT userID, firstName, lastName, gender, emailAdd, userRole, userProfile FROM Users;
            `;

    database.query(strQry, (err, data) => {
      if (err) throw err;
      else res.status(200).json({ results: data });
    });
  }
  fetchUser(req, res) {
    const strQry = `
            SELECT userID, firstName, lastName, gender, emailAdd, userRole, userProfile FROM Users
            WHERE userID = ?;
            `;

    database.query(strQry, [req.params.id], (err, data) => {
      if (err) throw err;
      else res.status(200).json({ result: data });
    });
  }
  async createUser(req, res) {
    // Payload
    let detail = req.body;
    // Hashing user password
    detail.userPass = await hash(detail.userPass, 15);
    let user = {
      emailAdd: detail.emailAdd,
      userPass: detail.userPass,
    };
    const strQry = `INSERT INTO Users
            SET ?;`;
    database.query(strQry, [detail], (err) => {
      if (err) {
        res.status(401).json({ err });
      } else {
        // Create a token
        const jwToken = createToken(user);
        res.cookie("LegitUser", jwToken, {
          maxAge: 3600000,
          httpOnly: true,
        });
        res.status(200).json({ msg: "A user record was saved." });
      }
    });
  }
  updateUser(req, res) {
    let data = req.body;
    if (data.userPass != null || data.userPass != undefined)
      data.userPass = hashSync(data.userPass, 15);
    const strQry = `
            UPDATE Users
            SET ?
            WHERE userID = ?;
            `;
    //db
    database.query(strQry, [data, req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A row was affected successfuly" });
    });
  }
  deleteUser(req, res) {
    const strQry = `
            DELETE FROM Users
            WHERE userID = ?;
            `;
    //db
    database.query(strQry, [req.params.id], (err) => {
      if (err) throw err;
      res.status(200).json({ msg: "A record was removed from a database" });
    });
  }
}
//PRODUCTS CLASS
class Product {
  fetchProducts(req, res) {
    const strQry = `SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
                FROM Products;`;
    database.query(strQry, (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  fetchProduct(req, res) {
    const strQry = `SELECT id, prodName, prodDescription, category, price, prodQuantity, imgURL
                FROM Products
                WHERE id = ?;`;
    database.query(strQry, [req.params.id], (err, results) => {
      if (err) throw err;
      res.status(200).json({ results: results });
    });
  }
  addProduct(req, res) {
    const strQry = `
                INSERT INTO Products
                SET ?;
                `;
    database.query(strQry, [req.body], (err) => {
      if (err) {
        res
          .status(400)
          .json({ err: "inserting a new record was unsuccessful" });
      } else {
        res.status(200).json({ msg: "Product saved" });
      }
    });
  }
  updateProduct(req, res) {
    const strQry = `
                UPDATE Products
                SET ?
                WHERE id = ?
                `;
    database.query(strQry, [req.body, req.params.id], (err) => {
      if (err) {
        res
          .status(400)
          .json({ err: "inserting a new record was unsuccessful" });
      } else {
        res.status(200).json({ msg: "Product updated" });
      }
    });
  }
  deleteProduct(req, res) {
    const strQry = `
                DELETE FROM Products
                WHERE id = ?;
                `;
    database.query(strQry, [req.params.id], (err) => {
      if (err) res.status(400).json({ err: "The record was not found." });
      res.status(200).json({ msg: "A product was deleted." });
    });
  }
}

module.exports = {User, Product};
