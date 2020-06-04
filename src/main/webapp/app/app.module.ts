import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { SampleWebAppSharedModule } from 'app/shared/shared.module';
import { SampleWebAppCoreModule } from 'app/core/core.module';
import { SampleWebAppAppRoutingModule } from './app-routing.module';
import { SampleWebAppHomeModule } from './home/home.module';
import { SampleWebAppEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    SampleWebAppSharedModule,
    SampleWebAppCoreModule,
    SampleWebAppHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    SampleWebAppEntityModule,
    SampleWebAppAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class SampleWebAppAppModule {}
