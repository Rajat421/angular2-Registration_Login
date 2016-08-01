/**
 * Created by consultadd on 1/8/16.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { appRouterProviders } from './route';

bootstrap(AppComponent, [
   appRouterProviders
]);