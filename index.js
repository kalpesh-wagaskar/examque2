const express = require('express');
const cors=require('cors')
const bookRelatedRoutes=require('./routes/Book')


const app = express();

app.use(cors());

app.use(express.json());

app.use('/book',bookRelatedRoutes );


app.listen(9980,
    () => {
        console.log("Server Started at 9980")
    })

