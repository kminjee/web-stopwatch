import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// main.ts 를 통해 우리가 작성하는 AppModule 이라는 app.module.ts 파일를 가장 먼저 실행시킨다.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
