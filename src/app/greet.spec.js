import {assert} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('index.html', () =>{
    it('Should absolutely greet the user', (done) => {
        const index = fs.readFileSync('./src/app/index.html', 'utf-8');
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementById('greeting');
            assert.isNotNull(h1, 'confirm we have a greeting')
            done();
            window.close();
        })
    }
)
})