import { exportAll } from "./exportAll";
import { convert } from "./jsonConverter";
import { Logger } from "./Logger";
import { genInstFiles } from "./genInstFiles";
import * as math from 'mathjs';

export function addTimeSigs(timeSigA: string, timeSigB: string): string{
    const sum = math.add(math.fraction(timeSigA), math.fraction(timeSigB));
    return sum.toString();
}

export { exportAll, convert, Logger, genInstFiles};