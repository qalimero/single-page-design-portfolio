import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./atoms/button/button.component";
import {ImageComponent} from "./atoms/image/image.component";
import {TextComponent} from "./atoms/text/text.component";
import {TitleH1Component} from "./atoms/title-h1/title-h1.component";
import {HeaderFooterComponent} from "./molecules/header-footer/header-footer.component";
import {HomeComponent} from "./templates/home/home.component";
import {HomepageComponent} from "../pages/homepage/homepage.component";
import { GridListComponent } from './grid-list/grid-list.component';
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    TextComponent,
    TitleH1Component,
    HeaderFooterComponent,
    HomeComponent,
    HomepageComponent
  ],
  declarations: [
    ButtonComponent,
    ImageComponent,
    TextComponent,
    TitleH1Component,
    HeaderFooterComponent,
    HomeComponent,
    HomepageComponent,
    GridListComponent
  ]
})
export class ComponentsModule {
}
