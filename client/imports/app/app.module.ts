//Core & Framework modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Application specific elements
import { AppComponent } from './app.component';
import { APP_COMPONENTS_DECLARATIONS } from './components';
import { APP_ROUTES_DECLARATIONS } from './app.routes';

//Application Module declaration
@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(APP_ROUTES_DECLARATIONS)
    ],
    declarations:[
        AppComponent,
        ...APP_COMPONENTS_DECLARATIONS
    ],
    providers:[

    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule{}