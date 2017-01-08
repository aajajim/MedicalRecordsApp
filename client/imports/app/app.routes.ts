//External components & decorators
import { Route } from '@angular/router';

//Application modules to route to
import { MainPageComponent } from './components/main-page.component';

//Exported routes
export const APP_ROUTES_DECLARATIONS:Route[] = [
    {path: '', component: MainPageComponent}
];