var express = require("express");
var app = express();

app.get("/", function (req, res, next) {
  next();
});

app.listen(8080);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/productos', (req,res) => {
   res.json({
       result:'get respuesta'
   })
})
