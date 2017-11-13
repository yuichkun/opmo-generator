import { addTimeSigs } from './util';
import { genMeasure, genBlank, genCustom, assembleOMN, genScore } from './constants'; 

interface IInstFile extends OpmoFile {
    measures: IMeasure[]
}
interface IMeasure {
    action: string;
    timeSig: string;
}
enum actionTypes{
    BLANK = '',
    CONCAT = '=>'
}

export class InstFile implements IInstFile {
    public name:string;
    public content:string;
    measures: IMeasure[] = [];

    constructor(inst:IInst, timeSigs:string[]){
        this.name = inst.name;
        this.content = "";

        for(let i = 0; i < inst.actions.length; i++){
            this.measures.push(
                {
                   action: inst.actions[i],
                   timeSig: timeSigs[i]
                }
            );
        }
        const orderList = this.createOrderList([], this.measures);
        this.content += this.genMeasures(orderList);
        this.content += this.genScore();
    }
    private genScore():string{
        return genScore(this.name);
    }
    private genMeasures(orderList:IMeasure[]): string{
        let content = "";
        orderList.forEach(
            (order, i) => {
                let omn: string;
                if (order.action === actionTypes.BLANK) {
                    omn = genBlank(order.timeSig);
                } else {
                    omn = genCustom(order.timeSig, order.action);
                }
                content += genMeasure(i, omn);
            }
        );
        content += assembleOMN(orderList.length);
        return content;
    }
    private createOrderList(orderList: IMeasure[], measures: IMeasure[]): IMeasure[] {
        if (measures.length === 0) {
            return orderList;
        }
        const measure = measures[0];
        const { action, timeSig } = measure;

        if (action === actionTypes.BLANK) {
            orderList.push(measure);
        } else if (action !== actionTypes.CONCAT) {
            const order = <IMeasure>{};
            order.action = measure.action;
            order.timeSig = measure.timeSig;
            while(true){
                measures.shift();
                if(measures[0].action === actionTypes.CONCAT){
                    order.timeSig = addTimeSigs(order.timeSig, measures[0].timeSig);
                }
                break;
            }
            orderList.push(order);
        }
        return this.createOrderList(orderList, measures.slice(1, measures.length));
    }
}