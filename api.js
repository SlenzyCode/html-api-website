const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/api/doviz", async (req, res) => {
  const datas1 = await axios.get(
    "https://api.exchangerate-api.com/v4/latest/USD"
  );
  const datas2 = await axios.get(
    "https://api.exchangerate-api.com/v4/latest/EUR"
  );
  const datas3 = await axios.get(
    "https://api.exchangerate-api.com/v4/latest/GBP"
  );
  const datas4 = await axios.get(
    "https://api.exchangerate-api.com/v4/latest/CAD"
  );
  const dolar = datas1.data.rates.TRY;
  const euro = datas2.data.rates.TRY;
  const sterlin = datas3.data.rates.TRY;
  const canada_dolar = datas4.data.rates.TRY;

  res.json({
    dolar,
    euro,
    sterlin,
    canada_dolar,
  });
});
app.listen(3000);