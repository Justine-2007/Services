
const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {

  const {
    sparePartID,
    stockOutQuantity,
    stockOutUnitPrice,
    stockOutTotalPrice,
    stockOutDate
  } = req.body;

  const sql = `
    INSERT INTO Stock_Out
    (SparePartID, StockOutQuantity, StockOutUnitPrice, StockOutTotalPrice, StockOutDate)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql,
    [sparePartID, stockOutQuantity, stockOutUnitPrice, stockOutTotalPrice, stockOutDate],
    (err, result) => {

      if (err) {
        console.log(err);
        return res.status(500).json({ message: err.sqlMessage });
      }

      res.json({ message: "Stock Out saved successfully" });
    }
  );
});

module.exports = router;