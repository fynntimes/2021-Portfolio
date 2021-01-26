const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.get('/sw.js', (req, res) => res.sendFile(path.join(__dirname, 'sw.js')));

// URL aliases
app.get('/:id', (req, res) => {
    const alias = req.params['id'];
    if(alias === "sasha") {
        return res.redirect("https://faizaand.medium.com/sasha-cb6806d76653");
    } else {
        return res.redirect("/");
    }
});

app.listen(8080);
