import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
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
} from '../feature/twitter/component';

const modules = [MatInputModule, MatFormFieldModule, MatButtonModule];
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
        AppLoaderComponent,
        HeaderComponent,
        LeftpaneComponent,
        LandingComponent,
        ...modules,
    ],
})
export class SharedModule {}
