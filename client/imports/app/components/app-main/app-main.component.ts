//External components & decorators
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

//Collections & necessary Collections
import { Records } from '../../../../../both/collections/records.collection';
import { Record } from '../../../../../both/models/record.model';

//Template & Style
import template from './app-main.component.html';
import style from './app-main.component.scss';

@Component({
    selector: 'app-main',
    template,
    styles: [ style ]
})
export class AppMainComponent {
    allRecords:Observable<Record[]>;

    constructor(){
        this.allRecords = Records.find({}).zone();
    }
}