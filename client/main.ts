//External components to enable the bootstraping
import 'angular2-meteor-polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//Application module to bootstrap
import { AppModule } from './imports/app/app.module';

//Bootstrap the app
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);