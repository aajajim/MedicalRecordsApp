import { Meteor } from 'meteor/meteor';

//All Necessary imports
import { loadRecords } from './imports/fixtures/records';

Meteor.startup(() => {
  // code to run on server at startup
  loadRecords();
});
