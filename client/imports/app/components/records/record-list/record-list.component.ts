//External components & decorators
import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Record } from '../../../../../../both/models/record.model';


//Template & Style
import template from './record-list.component.html';
import style from './record-list.component.scss';

@Component({
    selector: 'record-list',
    template,
    styles: [ style ]
})
export class  RecordListComponent {
    @Input() records:Observable<Record[]>;
}