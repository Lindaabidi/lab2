//exercice1:
var path = require('path');
var util = require('util');
var v8 = require('v8');
//Afficher le nom du fichier courant avec util.log et path.basename
util.log( path.basename(__filename) );
//Créer un chemin avec path.join puis affichage
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
util.log(dirUploads);
//Afficher les statistiques de l’utilisation de la mémoire avec v8.
util.log(v8.getHeapStatistics());

//exercice2
//Initialisation d’un tableau avec quelques questions à poser
var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred programming language?"
    ];
    //Préparation d’un tableau pour stocker les réponses de l’utilisateur
    var answers = [];
    // Préparation de la fonction ask qui permet d’afficher une question à l’écran
    function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(" > ");
    }
    //Préparation d’un écouteur pour intercepter la saisie des réponses
    process.stdin.on('data', function(data) {
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
        } else {
        //Annoncer la fin du programme
        process.exit();
        }
        });
        //Ecouter la fin du programme pour afficher les résultats
        process.on('exit', function() {
        process.stdout.write("\n\n\n\n");
        process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing
        ${answers[2]} later`);
        process.stdout.write("\n\n\n\n");
        });
        //Appel de la fonction ask pour poser la première question
        ask(0);

//exercice3:
       //importer les core modules eventEmitter et util
var EventEmitter = require('events').EventEmitter;
var util = require('util');
//créer un constructeur d’objets Person
var Person = function(name) {
this.name = name;
};
//Hériter les propriétés et méthodes de EventEmitter dans Person
util.inherits(Person, EventEmitter);
//Créer une instance d’objet Person
var ben = new Person("Ben Franklin");
//Préparer un écouteur et une callback function pour l’événement speak avec on.
ben.on('speak', function(said) {
console.log(`${this.name}: ${said}`);
});
//Emettre l’événement speak avec emit.
ben.emit('speak', "You may delay, but time will not.");

//exercice4:
var fs = require("fs");
fs.readdir('./lib', function(err, files) {
if (err) {
throw err;
}
console.log(files);
});
console.log("Reading Files...");

//execice5:
var fs = require("fs");
var path = require("path");
fs.readdir("./lib", function(err, files) {
files.forEach(function(fileName) {
var file = path.join(__dirname, "lib", fileName);
var stats = fs.statSync(file);
if(stats.isFile() && fileName !== ".DS_Store") {
fs.readFile(file, "UTF-8", function(err, contents) {
console.log(contents);
});
}
});
});

//exercice6:
var fs = require("fs");
var md = `
Sample Markdown Title
=====================
Sample subtitle
----------------
* point
* point
* point
`;
fs.writeFile("sample.md", md.trim(), function(err) {
console.log("File Created");
});

//exercice7:
var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
    }).listen(8081);
    // Affichage d’un message sur la console pour indiquer le lancement du serveur
    console.log('Server running at http://127.0.0.1:8081/');