// ...existing code...
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient,withInterceptors } from '@angular/common/http'; // Import https client

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(withEventReplay()),
    provideRouter(routes, withComponentInputBinding()), // Enables auto-binding
     provideHttpClient(
      withInterceptors([]) // Registers your functional interceptor
    ) // Add this function to the providers array
  ]
};
// ...existing code...