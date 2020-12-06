import { ContactsOutlined } from '@material-ui/icons';
import express from 'express';
import mongoose from 'mongoose';
import dbModel from './dbModel.js';

const app= express();
const port =process.env.PORT || 8080;

app.get('/game', (req, res) =>{
    res.send('houssem');
});

//midle wares
app.use(express.json());

const connection_url="mongodb+srv://admin:Houssem+1258@cluster0.p0tgd.mongodb.net/'gameplatforme'?retryWrites=true&w=majority";

mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser:true,
    useUnifiedTopology: true
});


app.post('/add', (req, res) =>{
    const body = req.body;
    console.log(body);
    dbModel.create(body,(err, data) => {
        if (err){
            res.status(500).send(err);
        }else {
            res.status(200).send(data);
        }
    })
});


app.get('/sync',(req , res) => {
    dbModel.find((err, data) =>{
        if (err) {
            res.status(500).send(err);
        }else { 
            res.status(200).send(data);
        }
    })
})

// app.delete('/delete/:id',(req, res) => {
//     dbModel.find( {_id:req.params.id}, (err, data) => {
//         if(err){
//             res.status(500).send(err);
//         }else {
//            collection.remove()
//             });
           
//         }
//     })
// })

// app.get('/deletegame/:id', sync function(req, res) { 

    

//     var id = req.params.id.toString();
    

//     await dbModel.deleteOne({"_id":id});
//     });



app.listen(port,()=> console.log(`listenning on port ${port}`));