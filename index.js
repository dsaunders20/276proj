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
    var id = req.body.StudentID;
    var name = req.body.Name;
    var weight = req.body.Weight;
    var height = req.body.Height;
    var color = req.body.HairColor; 
    var gpa = req.body.GPA;
    var sex = req.body.Sex;

    var query = "INSERT INTO student (studentid, name, weight, height, haircolor, gpa, sex) VALUES ($1, $2, $3, $4, $5, $6, $7)";

    pool.query(query, [id, name, weight, height, color, gpa, sex], (error, result) => {
        if (error) {throw error}
        //console.log(result);
    }); 
    res.redirect('/studenthome.html');
  });
  

app.get('/students', function(req,res){
    pool.query('select * from student', function(error, result){
        if (result.rows.length < 1)
        {
            res.render('pages/warning');
        }
        else{
        var results = { 'results': (result.rows[0].studentid) ? result.rows : [] };
        res.render('pages/db', results);}
    });       
});
app.get('/details', function(req,res){
    pool.query('select * from student', function(error, result){
        if (result.rows.length < 1)
        {
            res.render('pages/warning');
        }
        else{
        var results = { 'results': (result.rows[0].studentid) ? result.rows : [] };
        res.render('pages/details', results);}
    });       
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

