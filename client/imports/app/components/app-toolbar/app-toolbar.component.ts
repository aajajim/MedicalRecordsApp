//External components & decorators
import { Component, Output, EventEmitter } from '@angular/core';

//Template & Style
import template from './app-toolbar.component.html';
import style from './app-toolbar.component.scss';

@Component({
    selector: 'app-toolbar',
    template,
    styles: [ style ]
})
export class AppToolbarComponent {
    isDarkTheme: boolean = false;
    @Output() notifyDarkTheme:EventEmitter<boolean> = new EventEmitter<boolean>();
    
    onDarkThemeClick():void{
        this.isDarkTheme = !this.isDarkTheme;
        this.notifyDarkTheme.emit(this.isDarkTheme);
    }

}