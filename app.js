const express = require("express");
const app = express();
const cors = require("cors");
const data = require('./us-zip-code-latitude-and-longitude.json')
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.get("/:zipcode", (req, res) => {
     const result =  data.filter(doc=>doc.fields.zip===req.params.zipcode)
     res.send(result)
});
app.listen(process.env.PORT || 3001, () => {
  console.log("App Connected on : 3001");
});
