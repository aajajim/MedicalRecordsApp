//External components & decorators
import { Route } from '@angular/router';

//Application modules to route to
import { AppMainComponent } from './components';

//Exported routes
export const APP_ROUTES_DECLARATIONS:Route[] = [
    {path: '', component: AppMainComponent},
    {path: 'help', component: AppMainComponent},
    {path: 'about-us', component: AppMainComponent},
    {path: 'our-team', component: AppMainComponent},
    {path: 'persona-data', component: AppMainComponent},
    {path: 'security', component: AppMainComponent},
    {path: 'usage-conditions', component: AppMainComponent},
    {path: 'router-link', component: AppMainComponent}
];