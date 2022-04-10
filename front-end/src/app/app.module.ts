import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';

/* main.ts 에서 AppModule 을 실행하고, AppModule 에서 AppComponent를 부팅한다. */

@NgModule({
  declarations: [ // 컴포넌트들을 담는 곳
    AppComponent, 
    HeaderComponent, 
    SectionComponent,
    FooterComponent,
    TimeDisplayComponent,
    ButtonsComponent,
  ],
  imports: [ // 모듈들을 담는 곳
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // 뷰가 없는(컴포넌트가 아닌) 서비스 로직들을 담는 곳
  bootstrap: [AppComponent] // 처음 실행할 컴포넌트를 지정하는 곳
})
export class AppModule { }
