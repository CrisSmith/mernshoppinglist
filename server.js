const express= require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const ItemRoutes = require('./routes/Items')

mongoose.connect('mongodb://GChivas:smitty5smitty5@cluster0-shard-00-00-e2mbo.mongodb.net:27017,cluster0-shard-00-01-e2mbo.mongodb.net:27017,cluster0-shard-00-02-e2mbo.mongodb.net:27017/mernshoppinglist?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser: true}).then(console.log("Connected to database.."))
.catch(err=>console.log(err))
mongoose.set('useFindAndModify', false);
let app = express();

app.use(bodyParser.json());
app.use(express.static('./client/public'));
app.use(ItemRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, (err)=>{
    if(err){
        console.log("Nothing here", err)
    };
        console.log("Server is listening on port 3000...")
})