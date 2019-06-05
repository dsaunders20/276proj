const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

const { Pool } = require('pg');
var pool = new Pool({
    host: 'localhost',
    database: 'postgres'
});
//  var pool = new Pool({
//      connectionString : process.env.DATABASE_URL,
//      ssl: true
//  });
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))

app.post('/addStudent', function(req, res){
    // request body info
    console.log("hibib");
    console.log(req.body.name);
    // validate user
    // respond
  })
  

app.get('/students', function(req,res){
    pool.query('select * from student', function(error, result){
        var results = { 'results': (result.rows[0].studentid) ? result.rows : [] };
        res.render('pages/db', results);
    });       
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

