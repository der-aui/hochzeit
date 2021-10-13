import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LageComponent } from './lage/lage.component';
import { FooterComponent } from './footer/footer.component';
import { CountdownComponent } from './countdown/countdown.component';
import { HotelinfoComponent } from './hotelinfo/hotelinfo.component';
import { FerienwohnungenComponent } from './ferienwohnungen/ferienwohnungen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HotelsComponent,
    LageComponent,
    FooterComponent,
    CountdownComponent,
    HotelinfoComponent,
    FerienwohnungenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
