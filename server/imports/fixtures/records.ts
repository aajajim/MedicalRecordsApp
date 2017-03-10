import { Record } from '../../../both/models/record.model';
import { Records } from '../../../both/collections/records.collection';

export function loadRecords():void{
    if(Records.find().cursor.count() === 0){
        const records: Record[] = [];
        records.forEach((rec:Record) => Records.insert(rec));
    }
}
