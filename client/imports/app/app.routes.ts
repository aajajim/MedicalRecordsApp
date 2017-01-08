//External components & decorators
import { Route } from '@angular/router';

//Application modules to route to
import { MainPageComponent } from './components/main-page.component';

//Exported routes
export const APP_ROUTES_DECLARATIONS:Route[] = [
    {path: '', component: MainPageComponent},
    {path: 'help', component: MainPageComponent},
    {path: 'about-us', component: MainPageComponent},
    {path: 'our-team', component: MainPageComponent},
    {path: 'persona-data', component: MainPageComponent},
    {path: 'security', component: MainPageComponent},
    {path: 'usage-conditions', component: MainPageComponent},
    {path: 'router-link', component: MainPageComponent}
];