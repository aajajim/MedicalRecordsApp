import { CollectionObject } from './collection-object.model';

export interface Record extends CollectionObject{
    recordCategory:string;
    recordSubCategory:string;
    recordDateTime:Date;
    recordPraticient:string;
    recordDiagnosis:string;
    recordIsRefunded:boolean;
}