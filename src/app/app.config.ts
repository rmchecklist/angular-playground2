import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CustomReuseStrategy } from './custom-reuse-strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(),
    { provide: RouteReuseStrategy, useClass: CustomReuseStrategy }
  ]
};
