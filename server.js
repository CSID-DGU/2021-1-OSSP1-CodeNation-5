// const http = require('http');
// const data = require('./data/data.json');

// const server = http.createServer((req, res) => {
//     if (req.url === '/api/data') {
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.write(JSON.stringify());
//     }
// });

// const port = process.env.port || 5000; //서버의 포트번호를 지정해줍니다. 5000번에서 확인할 수 있습니다.

// server.listen(port, () => console.log(`listening on port${port}`));
/////////////
const bodyParser = require('body-parser');
const express = require('express'); //express 프레임워크 사용합니다.
const app = express();

const port = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const axios = require('axios');
const cheerio = require('cheerio');

const getHTML = async (keyword) => {
    try {
        return await axios.get('https://search.daum.net/search?w=tot&DA=YZR&t__nil_searchbox=btn&sug=&sugo=&sq=&o=&q=' + encodeURI(keyword));
    } catch (e) {
        console.log(e);
    }
};

//갖고 온 html을 파싱
const parse = async (keyword) => {
    const html = await getHTML(keyword);
    const $ = cheerio.load(html.data); //jquery 사용
    const $courseList = $('.keyword');
    let lists = [];
    $courseList.each((idx, node) => {
        lists.push({
            keyword: $(node).text(),
        });
    });
    console.log(lists);
};

app.get('/api/search', (req, res) => {
    res.send(parse('자바스크립트'));
});

app.listen(port, () => {
    console.log(`listening on port${port}`);
});
