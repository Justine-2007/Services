const express = require("express");
const router = express.Router();
const db = require("../db");

// CREATE STOCK IN
router.post("/", (req, res) => {

  console.log("BODY:", req.body);

  const {
    sparePartID,
    stockInQuantity,
    stockInDate
  } = req.body;

  // VALIDATION
  if (
    !sparePartID ||
    !stockInQuantity ||
    !stockInDate
  ) {
    return res.status(400).json({
      message: "Please fill all fields"
    });
  }

  const sql = `
    INSERT INTO Stock_In
    (
      SparePartID,
      StockInQuantity,
      StockInDate
    )
    VALUES (?, ?, ?)
  `;

  db.query(
    sql,
    [
      Number(sparePartID),
      Number(stockInQuantity),
      stockInDate
    ],
    (err, result) => {

      // MYSQL ERROR
      if (err) {

        console.log("MYSQL ERROR:", err);

        return res.status(500).json({
          message: err.sqlMessage
        });
      }

      // SUCCESS
      res.status(200).json({
        message: "Stock In inserted successfully"
      });
    }
  );
});

module.exports = router;