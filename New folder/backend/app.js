const express = require('express');
const cors = require('cors');

const adminRoutes = require('./routes/admin.routes')
let app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.get('/', (req,res)=>{
    res.send('hello')
})

const db = require('./model');
db.sequelize.sync()

app.use('/admin', adminRoutes);

let port = 3000 || process.env.PORT

app.listen(port, ()=>{
    console.log(`working good on ${port}`);
})

