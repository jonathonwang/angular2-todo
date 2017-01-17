// =============================================================================
// Import Styles - Output as: dist/css/app.css
import '../scss/app.scss';
// =============================================================================

import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

import { env } from './env';

if (env.production === false) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
