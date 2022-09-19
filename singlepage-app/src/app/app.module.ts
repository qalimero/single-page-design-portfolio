import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from "@angular/material/grid-list";
import { ImageComponent } from "./components/atoms/image/image.component";
import { TextComponent } from './components/atoms/text/text.component';
import { HeaderFooterComponent } from './components/molecules/header-footer/header-footer.component';
import { ButtonComponent } from './components/atoms/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageComponent,
    TextComponent,
    HeaderFooterComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
