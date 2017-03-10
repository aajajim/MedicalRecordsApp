import { MongoObservable } from 'meteor-rxjs';
import { Meteor } from 'meteor/meteor';

import { Record } from '../models/record.model';

export const Records = new MongoObservable.Collection<Record>('records');