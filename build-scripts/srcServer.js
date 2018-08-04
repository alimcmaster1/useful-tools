import path from 'path';
import express from 'express';
import  open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
   noInfo: true,
   publicPath: config.output.publicPath
}));

app.get('/', function(_req, res){
    res.sendFile(path.join(__dirname, '../src/app/index.html'))
})
app.get('/db/links', function(_req, res){
    res.sendFile(path.join(__dirname, '../src/resources/favourites.json'))
})
app.listen(port, function(err){
    if(err){
        console.log(err) // eslint-disable-line no-console
    } else{
        open('http://localhost:' + port)
    }
})