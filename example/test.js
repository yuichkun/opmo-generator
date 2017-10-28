const OpmoGenerator = require('../lib/index.js');
const csvPath = __dirname + "/hoge.csv";

const config = {
    csvPath,
    outDir: "lka" 
}

OpmoGenerator.start(config);