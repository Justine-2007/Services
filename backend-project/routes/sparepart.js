// routes/sparepart.js

const express = require("express");
const router = express.Router();

const db = require("../db");

// CREATE SPARE PART
router.post("/", (req, res) => {

  const {
    name,
    category,
    quantity,
    unitPrice,
    totalPrice
  } = req.body;

  // VALIDATION
  if (
    !name ||
    !category ||
    !quantity ||
    !unitPrice ||
    !totalPrice
  ) {
    return res.status(400).json({
      message: "Please fill all fields"
    });
  }

  const sql = `
    INSERT INTO Spare_Part
    (
      Name,
      Category,
      Quantity,
      UnitPrice,
      TotalPrice
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      name,
      category,
      Number(quantity),
      Number(unitPrice),
      Number(totalPrice)
    ],
    (err, result) => {

      // ERROR
      if (err) {

        console.log(err);

        return res.status(500).json({
          message: err.sqlMessage
        });
      }

      // SUCCESS
      res.status(200).json({
        message: "Spare Part Saved Successfully"
      });
    }
  );
});

module.exports = router;