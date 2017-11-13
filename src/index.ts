import * as fs from 'fs';
import * as path from 'path';
import * as csvParse from 'csv-parse';
import { convert } from './util';
import { isValidConfig, notUndefined } from './validator';
import { Generator } from './Generator';
import { exportAll } from './util';

export const start = (config: any) => {
    if (isValidConfig(config)) {
        console.log("Received Valid Configuration");
        const { csvPath, outDir } = config;
        fs.createReadStream(csvPath).pipe(
            csvParse({ delimiter: ',' }, (err, data) => {
                if(err) throw err;
                if( notUndefined(data) ){
                    const json = convert(csvPath, data);
                    const opmoFiles = Generator(json);
                    const exportPath = path.dirname(require.main.filename) + outDir;
                    exportAll(opmoFiles).to(exportPath);
                }
            })
        );
    }
};

