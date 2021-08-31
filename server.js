var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();
var server = http.createServer(app);
var bootContent = fs.readFileSync('HomePageBoot.html');

var security_token = fs.readFileSync('obtainToken.html');
var testing = fs.readFileSync('testing.html');
var admin = fs.readFileSync('editTestCase.html');
var testcases = fs.readFileSync('allTestCase.html');
var admin = fs.readFileSync('editTestCase.html');
var user = fs.readFileSync('userLogin.html');
app.set('view engine', 'ejs');

//導入css資料夾裡的東西
app.use('/css', express.static('css'));
//導入react資料夾裡的東西
app.use('/react-0.14.3', express.static('react-0.14.3'));
//導入js資料夾裡的東西
app.use('/js', express.static('js'));


app.get('/HomePageBoot', function(request,response){
  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(bootContent);
  response.end();
});
app.get('/:resourceId/OAS', function(request,response){
  var id = request.params.resourceId;
  if(!isNaN(id)) {
    console.log(id);
    response.render('OAS', { // 這邊不用寫 views/index 是因為 express 預設 template 就是會放在 views 資料夾裡面
      name: id,
    })
  }else {
    console.log("not in index");
    response.end();
  }
});



app.get('/obtainToken', function(request, response){

  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(security_token);
  response.end();

});

app.get('/testing', function(request, response){

  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(testing);
  response.end();

});
app.get('/admin', function(request, response){

  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(admin);
  response.end();

});
app.get('/testCases', function(request, response){

  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(testcases);
  response.end();

});
app.get('/user', function(request, response){

  response.writeHeader(200,{'Content-Type':'text/html'});
  response.write(user);
  response.end();

});
server.listen(55212, function(){
  console.log('hello nodejs');
});
