import { Record } from '../../../both/models/record.model';
import { Records } from '../../../both/collections/records.collection';

export function loadRecords():void{
    if(Records.find().cursor.count() === 0){
        const records: Record[] = [
            {
                recordCategory:'Prescription',
                recordSubCategory:'General Health',
                recordDateTime:new Date(2013,7,13),
                recordPraticient:'Dr. Dupont',
                recordDiagnosis:'Flue',
                recordIsRefunded:true
            },
            {
                recordCategory:'Blood Analysis',
                recordSubCategory:'Check up',
                recordDateTime:new Date(2014,8,23),
                recordPraticient:'Lucas NILSON',
                recordDiagnosis:'High cholesterol',
                recordIsRefunded:true
            }/*,
            {
                recordCategory:'',
                recordSubCategory:'',
                recordDateTime:new Date(),
                recordPraticient:'',
                recordDiagnosis:'',
                recordIsRefunded:true
            },
            {
                recordCategory:'Prescription',
                recordSubCategory:'',
                recordDateTime:new Date(),
                recordPraticient:'',
                recordDiagnosis:'',
                recordIsRefunded:true
            },
            {
                recordCategory:'',
                recordSubCategory:'',
                recordDateTime:new Date(),
                recordPraticient:'',
                recordDiagnosis:'',
                recordIsRefunded:true
            },
            {
                recordCategory:'',
                recordSubCategory:'',
                recordDateTime:new Date(),
                recordPraticient:'',
                recordDiagnosis:'',
                recordIsRefunded:true
            }*/
        ];
        records.forEach((rec:Record) => Records.insert(rec));
    }
}
