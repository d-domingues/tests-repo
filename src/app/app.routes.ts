import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { KendoTestsComponent } from './components/kendo-tests/kendo-tests.component';
import { RxjsExercicesComponent } from './components/rxjs-exercices/rxjs-exercices.component';
import { ZoneTestsComponent } from './components/zone-tests/zone-tests.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'rxjs-exercices',
    component: RxjsExercicesComponent,
  },
  {
    path: 'kendo-tests',
    component: KendoTestsComponent,
  },
  {
    path: 'zone-tests',
    component: ZoneTestsComponent,
  },
];
