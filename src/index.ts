import * as fs from 'fs';
import * as csvParse from 'csv-parse';
import { convert } from './util';
import { isValidConfig, notUndefined } from './validator';
import { Generator } from './Generator';
import { Exporter } from './util';

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
                    Exporter('example/opmo', opmoFiles);
                }
            })
        );
    }
};

