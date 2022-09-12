import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid/grid.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { IntroductionComponent } from './introduction/introduction/introduction.component';
import { ParagraphComponent } from './components/atoms/paragraph/paragraph.component';
import { HeadingLargeComponent } from './components/atoms/heading-large/heading-large.component';
import { PictureComponent } from './components/atoms/picture/picture.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { LogoButtonComponent } from './components/molecules/logo-button/logo-button.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    IntroductionComponent,
    ParagraphComponent,
    HeadingLargeComponent,
    PictureComponent,
    ButtonComponent,
    LogoButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
