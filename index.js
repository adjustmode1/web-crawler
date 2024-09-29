const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const {wikiPediaTourism}  = require('./format/tourims/format');
const logger = require('./utils/logger');
const path = require('path');

function cleanText(text) {
  // remove reference
  const regex = /\[\d+\]/g;

  text = text.replace(regex, '');

  return text;
}


const folderOutput = 'dataset';

if (!fs.existsSync(folderOutput)) {
  fs.mkdirSync(folderOutput);
}


for(let dataIndex = 0; dataIndex < wikiPediaTourism.length; dataIndex++){
    const link = wikiPediaTourism[dataIndex].link;
    logger.info(`Crawl ${link}`);

    axios.get(link)
    .then(response => {
        let data = '';
        const html = response.data;
        const $ = cheerio.load(html);
        const dataInputFormat = wikiPediaTourism[dataIndex]['input'];
        
        const titleTag = dataInputFormat['title'];
        const listBody = dataInputFormat['body'];
        const fileName = wikiPediaTourism[dataIndex]['fileName']
        const outputPath = `${fileName}.txt`

        data+= `<title>${$(titleTag).text().trim()}</title>\n`;

        // loop body
        for(let bodyIndex = 0; bodyIndex < listBody.length; bodyIndex++){
            const body = listBody[bodyIndex];
            
            if(body.type === 'list'){
                const bodyTag = body['tag'];
                const titleBodyTag = body['title'];
                const contentTag = body['content'];

                $(bodyTag).children().each(function () {
                  const child = $(this);
                  const tagName = child.prop('tagName').toUpperCase();
                  
                  if(typeof titleBodyTag === 'string' && tagName === titleBodyTag.toUpperCase()) {
                    data += `<title>${child.text().trim()}</title>`;
                  }else{
                    if(titleBodyTag.hasClass && child.hasClass(titleBodyTag.hasClass)){
                      if(titleBodyTag.get){
                        const childBodyTag = child.find(titleBodyTag.get);

                        data += `<title>${childBodyTag.text().trim()}</title>`;
                      }
                    }
                  }

                  if(typeof contentTag === 'string' && tagName === contentTag.toUpperCase()) {
                    data += `<body>${(child.text().trim())}</body>`;
                  }else{
                    if(contentTag.hasClass && child.hasClass(contentTag.hasClass)){
                      if(contentTag.get){
                        const childContentTag = child.find(contentTag.get);

                        data += `<title>${childContentTag.text().trim()}</title>`;
                      }
                    }
                  }



                })
            } else {
              //TODO: case object body 
            }
        }

        data = cleanText(data)
        fs.writeFileSync(path.join(folderOutput, outputPath), data);
    })
    .catch(error => {
        console.error(`Error: ${error}`);
    });
    
}
