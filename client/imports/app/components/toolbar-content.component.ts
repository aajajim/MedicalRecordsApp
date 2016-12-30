//External components & decorators
import { Component, Output, EventEmitter } from '@angular/core';

//Template & Style
import template from '../templates/toolbar-content.component.html';
import style from '../styles/toolbar-content.component.scss';

@Component({
    selector: 'toolbar-content',
    template,
    styles: [ style ]
})
export class ToolbarContentComponent {
    isDarkTheme: boolean = false;
    @Output() notifyDarkTheme:EventEmitter<boolean> = new EventEmitter<boolean>();
    
    onDarkThemeClick():void{
        this.isDarkTheme = !this.isDarkTheme;
        this.notifyDarkTheme.emit(this.isDarkTheme);
    }

}