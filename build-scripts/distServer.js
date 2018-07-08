import path from 'path';
import express from 'express';
import open from 'open';
import comression from 'compression';

const port = 3000;
const app = express();

/* eslint-disable no-console */

app.use(comression());
// serve static files
app.use(express.static('dist'))

app.get('/', function(_req, res){
    res.sendFile(path.join(__dirname, '../dist/index.html'))
})
app.get('/favourite', function(_req, res){
    res.sendFile(path.join(__dirname, '../src/resources/favourites.json'))
})
app.listen(port, function(err){
    if(err){
        console.log(err)
    } else{
        open('http://localhost:' + port)
    }
})
