import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LastnamesearchPipe} from './shared/lastnamesearch.pipe';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LastnamesearchPipe
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'ng-cli-universal'}),
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
