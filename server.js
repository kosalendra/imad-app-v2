var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pages = {
  'page_one' : {
    title : 'Page One|Kosalendra',
    heading : 'Page One',
    content : `<p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>

    <p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>
    <p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>`,
    date : 'March 1, 2017',
  },
  'page_two' : {
    title : 'Page Two|Kosalendra',
    heading : 'Page Two',
    content : `<p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>

    <p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>
    <p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>`,
    date : 'March 1, 2017',
  },
  'page_three' : {
    title : 'Page Three|Kosalendra',
    heading : 'Page Three',
    content : `<p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>

    <p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>
    <p>
        Hello Everyone. Today is sunday. Tommorow is monday.
    </p>`,
    date : 'March 1, 2017',
  },
};

function createTemplate(data){
  var title = data.title;
  var heading = data.heading;
  var content = data.content;
  var date = data.date;


    var htmlTemplate = `<html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />

        </head>

        <body>
          <div class = "container">
            <div>
                <a href = '/'>Home</a>
                <hr />
            </div>
            <div>
              <h4>${heading}</h4>
                ${content}
            </div>
            <div>
                ${content}
            </div>
          </div>
        </body>
    </html>
  `;
  return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/:pageNo', function (req, res) {
    var pageNo = req.params.pageNo;
    res.send(createTemplate(pages[pageNo]))
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});