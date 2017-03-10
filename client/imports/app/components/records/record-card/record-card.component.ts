//External components & decorators
import { Component,  Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Record } from '../../../../../../both/models/record.model';

//Template & Style
import template from './record-card.component.html';
import style from './record-card.component.scss';

@Component({
    selector: 'record-card',
    template,
    styles: [ style ]
})
export class  RecordCardComponent {
    @Input() rec: Observable<Record>;
}