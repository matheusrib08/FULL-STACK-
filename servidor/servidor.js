const http = require('http');
const express = require('express');
const colors = require('colors');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const path = require('path');

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://matheusrib0809:609080biRmat@cluster0809.svwgcbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0809";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views');

const server = http.createServer(app);
server.listen(80, () => {
  console.log('Servidor rodando na porta 80...'.rainbow);
});

// Conexão com o banco de dados
let db;
client.connect().then(() => {
  db = client.db("exemplo_db");
  console.log("Conectado ao MongoDB".green);
}).catch(err => {
  console.error("Erro ao conectar ao MongoDB:", err);
});

// Rota principal redireciona para Projects.html
app.get('/', (req, res) => {
  res.redirect('/Projects.html');
});

// Rota para exibir o blog
app.get('/blog', async (req, res) => {
  try {
    const posts = await db.collection("posts").find().toArray();
    res.render('blog', { posts });
  } catch (error) {
    res.status(500).send("Erro ao buscar posts.");
  }
});

// Rota para processar novo post
app.post('/cadastrar_post', async (req, res) => {
  const { titulo, resumo, conteudo } = req.body;
  if (!titulo || !resumo || !conteudo) {
    return res.status(400).send("Todos os campos são obrigatórios.");
  }

  try {
    await db.collection("posts").insertOne({ titulo, resumo, conteudo });
    res.redirect('/blog');
  } catch (error) {
    res.status(500).send("Erro ao cadastrar post.");
  }
});

// Rota de exemplo de cadastro (usada antes)
app.get('/cadastro', (req, res) => {
  const nome = req.query.nome;
  const senha = req.query.senha;
  res.render('resposta_cadastro', { nome, senha });
});

// Rota de exemplo de login (usada antes)
app.get('/login', (req, res) => {
  const nome = req.query.nome;
  res.render('resposta_login', { nome });
});


