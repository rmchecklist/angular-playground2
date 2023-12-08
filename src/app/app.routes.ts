import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'countries',
        loadChildren: () => import('./country/country.routes').then(r => r.COUNTRY_ROUTES),
        data: {
            reuseComponent: true
        }
    },
    {
        path: 'countries/:countryId',
        loadChildren: () => import('./state/state.routes').then(r => r.STATE_ROUTES),
        data: {
            reuseComponent: true
        }
    },
    { path: '', redirectTo: '', pathMatch: 'full' },
];

