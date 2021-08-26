const express = require('express')
const app = express()
 
const PORT = process.env.PORT || 4000;


app.use(express.static('src/public'));


app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
});