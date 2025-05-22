let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let name = "Zain"
    let searchNow = "Don'tSearch"
  res.render('index', {foo: name , search : searchNow});
});

app.get('/blog/:slug', (req, res) => {
    let nameBlog = "Nextjs"
    let title = "Why nextjs 15 comes "
  res.render("blog", {nameBlog: nameBlog, title: title});
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));