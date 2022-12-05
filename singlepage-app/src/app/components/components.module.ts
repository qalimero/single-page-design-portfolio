import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {ButtonComponent} from "./atoms/button/button.component";
import {ImageComponent} from "./atoms/image/image.component";
import {TextComponent} from "./atoms/text/text.component";
import {TitleH1Component} from "./atoms/title-h1/title-h1.component";
import {HeaderFooterComponent} from "./molecules/header-footer/header-footer.component";
import {HomeComponent} from "./templates/home/home.component";
import {HomepageComponent} from "../pages/homepage/homepage.component";
import { CardGridComponent } from './organisms/card-grid/card-grid.component';
import { TitleParagraphButtonComponent } from './organisms/title-paragraph-button/title-paragraph-button.component';
import { TitleH2Component } from './atoms/title-h2/title-h2.component';
import { MyWorkSliderComponent } from "./my-work-slider/my-work-slider.component";
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    ButtonComponent,
    ImageComponent,
    TextComponent,
    TitleH1Component,
    HeaderFooterComponent,
    HomeComponent,
    HomepageComponent,
  ],
  declarations: [
    ButtonComponent,
    ImageComponent,
    TextComponent,
    TitleH1Component,
    HeaderFooterComponent,
    HomeComponent,
    HomepageComponent,
    CardGridComponent,
    TitleParagraphButtonComponent,
    TitleH2Component,
    MyWorkSliderComponent
  ]
})
export class ComponentsModule {
}
