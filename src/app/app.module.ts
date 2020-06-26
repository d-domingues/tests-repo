import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { KendoGridColCustomComponent } from './components/kendo-tests/kendo-grid-col-custom/kendo-grid-col-custom.component';
import { KendoTestsComponent } from './components/kendo-tests/kendo-tests.component';
import { RxjsExercicesComponent } from './components/rxjs-exercices/rxjs-exercices.component';
import { ZoneTestsComponent } from './components/zone-tests/zone-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RxjsExercicesComponent,
    KendoTestsComponent,
    KendoGridColCustomComponent,
    ZoneTestsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    GridModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: 'comps', useValue: appRoutes }],
})
export class AppModule {}
