const express = require('express');
require('dotenv').config({
    path: 'src/config/.env'
});
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api', require('./routes/index'))




const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(PORT))