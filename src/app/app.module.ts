import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AddProfileModule } from './components/add-profile/add-profile.module';
import { ProfileRoutingPathModule } from './components/view-profile/view-profile.module';
import { RoutingPathRoutingModule } from './routing-path-routing.module';
import { ArtableService } from './service/artable.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RoutingPathRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ProfileRoutingPathModule,
    AddProfileModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
