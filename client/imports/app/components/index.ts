//Components to expose in the appModule
import { MainPageComponent } from './app-main/main-page.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppSidenavComponent } from './app-sidenav/app-sidenav.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

//Aggregated list of declarations
export const APP_COMPONENTS_DECLARATIONS = [
    MainPageComponent,
    AppFooterComponent,
    AppToolbarComponent,
    AppSidenavComponent
];

