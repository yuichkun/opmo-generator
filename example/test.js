const OpmoGenerator = require('../lib/index.js');

const config = {
    csvPath: __dirname + "/test.csv",
    outDir: "/opmo"
}

OpmoGenerator.start(config);