import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ruta-menu',
    loadComponent: () => import('./ruta-menu/ruta-menu.page').then( (m) => m.RutaMenuPage)
  },
  {
    path: 'ruta-detalles',
    loadComponent: () => import('./ruta-detalles/ruta-detalles.page').then( (m) => m.RutaDetallesPage)
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./access/sign-up/sign-up.page').then( (m) => m.SignUpPage)
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./access/sign-in/sign-in.page').then( m => m.SignInPage)
  },
  {
    path: 'boletos',
    loadComponent: () => import('./boletos/boletos.page').then( m => m.BoletosPage)
  },
  {
    path: 'cuenta',
    loadComponent: () => import('./cuenta/cuenta.page').then( m => m.CuentaPage)
  },
];
