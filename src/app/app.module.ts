import {NgModule, APP_INITIALIZER, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {ClipboardModule} from 'ngx-clipboard';
import {TranslateModule} from '@ngx-translate/core';
import {InlineSVGModule} from 'ng-inline-svg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {environment} from 'src/environments/environment';
// Highlight JS
import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
// #fake-start#
/*//import { CoreModule } from './core/core.module';*/
import {Angulartics2Module} from 'angulartics2';
import {
  AuthInterceptor,
  BasicAuthInterceptor,
  GlobalErrorHandler,
  ServerErrorInterceptor,
  UserRouteAccessGuard
} from 'cbs-lib';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {MessageService} from 'primeng/api';
import {FooterComponent} from './footer/footer.component';
// import { MessageService } from 'primeng/api';
// #fake-end#

// function appInitializer(authService: AuthService) {
//   return () => {
//     return new Promise((resolve) => {
//       authService.getUserByToken().subscribe().add(resolve);
//     });
//   };
// }


@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    /*//SplashScreenModule,*/
    TranslateModule.forRoot(),
    HttpClientModule,
    HighlightModule,
    ClipboardModule,
    // #fake-start#
    // environment.isMockEnabled
    //   ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
    //     passThruUnknownUrl: true,
    //     dataEncapsulation: false,
    //   })
    //   : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    // CoreModule ,
    Angulartics2Module.forRoot(),
    NgxWebstorageModule.forRoot()
    /*   //CbsLibModule*/
  ],
  providers: [
    MessageService,
    /*//NotificationService ,*/
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true}
    ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
