const express = require('express')  
const app = express()  
const port = 3000
var path = require('path');

app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, '/view')));
app.use('/img',express.static(path.join(__dirname, 'public/img')));



app.get('/', (req, res) => {  
  res.sendFile('F:/MyblogSite/view/index.html')

})

app.get('/', function (req, res) {
   var file = path.join(__dirname, '/public/img/EBResume.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})