//External components & decorators
import { Component } from '@angular/core';
import { MdSidenav } from '@angular/material';

//Template & Style
import template from '../templates/main-nav.component.html';
import style from '../styles/main-nav.component.scss';

@Component({
    selector: 'main-nav',
    template,
    styles: [ style ]
})
export class MainNavComponent {
}