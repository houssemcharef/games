import express from 'express';
import mongoose from 'mongoose';
import dbModel from './dbModel.js';

const app= express();
const port =process.env.PORT || 8080;



//midle wares
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT, POST,DELETE');
    next();
  });

const connection_url="mongodb+srv://admin:Houssem+1258@cluster0.p0tgd.mongodb.net/'gameplatforme'?retryWrites=true&w=majority";

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true
});


app.post('/addgame', (req, res) =>{

    const body = req.body;
    dbModel.create(body,(err, data) => {
        if (err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    })
});


app.get('/sync',(req , res) => {
    res.set('Access-Control-Allow-Origin', '*');
    dbModel.find((err, data) =>{
        if (err) {
            res.status(500).send(err);
        }else { 
            res.status(200).send(data);
        }
    })
})

app.delete('/delete/:id', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    var id = req.params.id;
    const collection = dbModel.find((err, data) =>{
        collection.deleteOne({ _id: new mongoose.Types.ObjectId(id) }, function (err, results) {
            if (err) {
                res.status(500).send(err);
            }else { 
                res.status(200).send(results)
            }
        });
    });

});

app.put('/update/:id', function (req, res) {
    var id = req.params.id;
    const collection = dbModel.find((err, data) =>{
        collection.updateOne({ _id: new mongoose.Types.ObjectId(id) },req.body, function (err, results) {
            if (err) {
                res.status(500).send(err);
            }else { 
                res.status(200).send(results)
            }
        });
    });

});





app.listen(port,()=> console.log(`listenning on port ${port}`));