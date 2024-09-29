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

function checkObjectData(child, bodyData, data) {
  if(bodyData.hasClass){
    if(child.hasClass(bodyData.hasClass) && bodyData.get){ // has class
      for(let indexChildTag = 0; indexChildTag < bodyData.get.length; indexChildTag ++){
        const childBodyTag = child.find(bodyData.get[indexChildTag]);

        data += `<title>${childBodyTag.text().trim()}</title>`;
      }
    }
  } else{ // has id
    //TODO: extract id
  }

  return data;
}
function extractTitle(child, bodyData, data) {
  const tagName = child.prop('tagName').toUpperCase();
  
  if(typeof bodyData === 'string') { // type is string
    if(tagName === bodyData.toUpperCase()){
      data += `<title>${child.text().trim()}</title>`;
    }
  }else{ // type is object
    data = checkObjectData(child, bodyData, data)
  }


  return data;
}

function extractBody(child, contentBody, data) {
  const tagName = child.prop('tagName').toUpperCase();

  if(Array.isArray(contentBody)) { // type is array string

    for(let contentBodyIndex = 0; contentBodyIndex < contentBody.length; contentBodyIndex ++){
      contentBodyTagname = contentBody[contentBodyIndex];

      if(child.find(contentBodyTagname)){
        if(tagName === contentBodyTagname.toUpperCase()){
          data += `<title>${child.text().trim()}</title>`;
        }
      }
    }

  }else{ // type is object
    data = checkObjectData(child, contentBody, data)
  }


  return data;
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

                  data = extractTitle(child, titleBodyTag ,data);
                  data = extractBody(child, contentTag ,data);
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
