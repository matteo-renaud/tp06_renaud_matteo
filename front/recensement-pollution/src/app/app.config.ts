import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { NgxsModule, provideStore } from '@ngxs/store';
import { AuthState } from '../shared/states/auth-state';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { UserFavorisState } from '../shared/states/user-favoris-state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
      providePrimeNG({
        theme: {
          preset: Aura
        }
    }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(
      [AuthState, UserFavorisState],
      withNgxsStoragePlugin({
        keys: '*'
      })//pour avoir la clé dans le local storage
    ),
  ]
};
