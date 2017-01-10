//Components to expose in the appModule
import { AppMainComponent } from './app-main/app-main.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

//Aggregated list of declarations
export const APP_COMPONENTS_DECLARATIONS = [
    AppMainComponent,
    AppFooterComponent,
    AppToolbarComponent,
    AppSidenavComponent
];

// Components of global layout
export * from './app-sidenav';
export * from './app-toolbar';
export * from './app-main';
export * from './app-footer';