const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/app/public/home.html'))
});


app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}`)
});