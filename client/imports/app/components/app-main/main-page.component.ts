//External components & decorators
import { Component } from '@angular/core';

//Template & Style
import template from './main-page.component.html';
import style from './main-page.component.scss';

@Component({
    selector: 'main-page',
    template,
    styles: [ style ]
})
export class MainPageComponent {
}