const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://vi.wikipedia.org/wiki/Du_l%E1%BB%8Bch_Vi%E1%BB%87t_Nam';

const data = '';
const outputPath = 'data.txt';

axios.get(url)
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const tag = 'div.mw-content-ltr.mw-parser-output';

    $(tag).children().each(function() {
        console.log($(this).prop('tagName'));
      });

})
.catch(error => {
    console.error(`Error: ${error}`);
});
    
