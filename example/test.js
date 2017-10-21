const OpmoGenerator = require('../lib/index.js');
const csvPath = __dirname + "/test.csv";

const config = {
    csvPath,
    outDir: "lka" 
}

OpmoGenerator.start(config);