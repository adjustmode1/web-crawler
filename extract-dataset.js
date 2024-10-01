const fs = require('fs');
const path = require('path');

const rawDataset = 'raw-dataset';
const saveDataset = 'dataset';

const listFile = fs.readdirSync(rawDataset);

function cleanText(text) {
  return text.replaceAll("<body>", " ").replaceAll("</body>", " ").replaceAll(/\s+/g, ' ').trim();
}

function chunkPage(content) {
  const regex = /<title>(.*?)<\/title>|<body>(.*?)<\/body>/g;

  let match;
  let extractedData = [];
  let currentTitle = null;
  let currentBodies = [];
  while ((match = regex.exec(content)) !== null) {
    if (match[1]) {
        if (currentTitle !== null) {
            extractedData.push({
                title: currentTitle,
                bodies: currentBodies.join('/n')
            });
        }
        currentTitle = match[1];
        currentBodies = [];
    } else if (match[2]) {
        currentBodies.push(match[2]);
    }
}

  if (currentTitle !== null) {
      extractedData.push({
          title: currentTitle,
          bodies: currentBodies.join("\n")
      });
  }
  return extractedData;
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
      if(chunkData.bodies.length > 0){
        chunkCount += chunkData.bodies.length;
        fs.writeFileSync(path.join(saveDataset, fileName, 'chunk_' + index), JSON.stringify(chunkData, null, 2), 'utf-8');
      }
    })
  }catch(e){
    console.error('error: ',e);
  }
});

console.log(`Has ${listFile.length} files with ${chunkCount} chunks`)