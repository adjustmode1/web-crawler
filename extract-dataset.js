const fs = require('fs');
const path = require('path');

const rawDataset = 'raw-dataset';
const saveDataset = 'dataset';

const listFile = fs.readdirSync(rawDataset);

function cleanText(text) {
  return text.replace(/\s+/g, ' ').trim();
}

function chunkPage(content) {
  const titlePattern = /<title>(.*?)<\/title>/g;
  const titles = [...content.matchAll(titlePattern)].map(match => cleanText(match[1]));
  const result = [];

  titles.forEach((title) => {
      const bodyPattern = new RegExp(`<body>(.*?)</body>(?=<title>|$)`, 'gs');
      const bodies = [...content.matchAll(bodyPattern)].map(match => cleanText(match[1]));

      bodies.forEach((body) => {
          result.push(cleanText(body.trim()));
      });
  });

  return result;
}

let chunkCount = 0;
listFile.map(file => {
  try {
    const data = fs.readFileSync(path.join(rawDataset, file), 'utf-8');
    const fileName = file.split('.txt')[0];

    if(!fs.existsSync(path.join(saveDataset, fileName))){
      fs.mkdirSync(path.join(saveDataset, fileName));
    }

    const listChunks = chunkPage(data);

    listChunks.forEach((chunkData, index) => {
      chunkCount += 1;
      fs.writeFileSync(path.join(saveDataset, fileName, 'chunk_' + index), chunkData, 'utf-8');
    })
  }catch(e){
    console.error('error: ',e);
  }
});

console.log(`Has ${listFile.length} files with ${chunkCount} chunks`)