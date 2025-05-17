var http = require('http');
var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


const uri = "mongodb+srv://matheusrib0809:609080biRmat@cluster0809.svwgcbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0809";


const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("exemplo_db");
var usuarios = dbo.collection("usuarios");

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando ...'.rainbow);

app.get('/', function (requisicao, resposta){
resposta.redirect('Login.html')
})

app.get('/inicio', function (requisicao, resposta){
var nome = requisicao.query.info;
console.log(nome);
})

app.post('/inicio', function (requisicao, resposta){
var data = requisicao.body.data;
console.log(data);
})

app.get('/cadastro',function (requisicao, resposta){
var nome = requisicao.query.nome;
var senha = requisicao.query.senha;

resposta.render('resposta_cadastro', {nome, senha})
})

app.get('/login',function (requisicao, resposta){
var nome = requisicao.query.nome;

resposta.render('resposta_login', {nome})
})


