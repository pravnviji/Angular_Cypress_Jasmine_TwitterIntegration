import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';


import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { LeftpaneComponent } from './leftpane/leftpane.component';
import { AppLoaderComponent } from './loader/loader.component';
import { LandingComponent } from './landing/landing.component';

import { CommonService } from './services/common.service';

import { LoaderService } from './loader/service/loader.service';
import { LoaderInterceptor } from './loader/service/loader.interceptor';

import {
    MainComponent,
    UserprofileComponent,
    UserPostComponent,
    UserFeedComponent
} from '../feature/twitter/component';

const modules = [

    ButtonModule,
    RippleModule,
    TabViewModule,
    InputTextareaModule
];
@NgModule({
    imports: [
        AngularCommonModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ...modules,
    ],
    declarations: [
        AppLoaderComponent,
        HeaderComponent,
        LeftpaneComponent,
        LandingComponent,
        MainComponent,
        UserprofileComponent,
        UserPostComponent,
        UserFeedComponent
    ],
    providers: [
        CommonService,
        LoaderService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
    ],
    exports: [
        AngularCommonModule,
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        AppLoaderComponent,
        HeaderComponent,
        LeftpaneComponent,
        LandingComponent,
        ...modules,
    ],
})
export class SharedModule {}
