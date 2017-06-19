const express = require('express');
const app = express();

var loremLipsum = require('lorem-ipsum');
var output = loremLipsum({
    count: 3                       
  , units: 'paragraphs'            
  , sentenceLowerBound: 5          
  , sentenceUpperBound: 15        
  , paragraphLowerBound: 3         
  , paragraphUpperBound: 7        
  , format: 'html'               
              
});


app.get('/lorem', function (req, res) {
  res.send(output);
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
});
