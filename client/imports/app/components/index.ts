//Components to expose in the appModule
import { AppMainComponent } from './app-main/app-main.component';
import { AppToolbarComponent } from './app-toolbar';
import { AppSidenavComponent } from './app-sidenav';
import { AppFooterComponent } from './app-footer';
import { RecordCardComponent, RecordFormComponent, RecordListComponent } from './records';

//Aggregated list of declarations
export const APP_COMPONENTS_DECLARATIONS = [
    AppMainComponent,
    AppFooterComponent,
    AppToolbarComponent,
    AppSidenavComponent,
    RecordCardComponent,
    RecordListComponent,
    RecordFormComponent
];

// Components of global layout
export * from './app-sidenav';
export * from './app-toolbar';
export * from './app-main';
export * from './app-footer';
export * from './records';