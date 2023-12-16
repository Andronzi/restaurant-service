import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: () =>
      import('@restaurant/products').then((m) => m.ProductListComponent),
  },
  {
    path: 'orders',
    loadComponent: () =>
      import('@restaurant/orders').then((m) => m.OrdersComponent),
  },
];
