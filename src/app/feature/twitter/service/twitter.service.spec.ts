import { SplitInterpolation } from '@angular/compiler';
import { of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { expect,use,should,util,assert } from 'chai';

import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { HttpRequestService } from '../../../core/http/http-request.service';
import {
    ITweetUserProfile,
    ITweetRecentTweets,
    ITweetUserHeadlines,
} from './twitter-feed.interface';
import { Logger } from '../../../core/logger.service';
import { Type } from '@angular/core';

import { TwitterService } from './twitter.service';
import * as sinon from 'sinon';
declare var require: any;

describe('TwitterService', () => {
    let service: TwitterService;
    let serviceTest: any;
    let mockUserProfile: ITweetUserProfile;
    let mockUserHeadlines: ITweetUserHeadlines;
    let http: HttpRequestService;
    let logger: Logger;
    let httpMock: HttpTestingController;
    let responseData: any;
    const profileMockData = require('../../../../assets/mock/profile.json');

    const environmentUrl = 'http://localhost:3000/';



    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        http = TestBed.get(HttpRequestService);
        logger = TestBed.get(Logger);
        httpMock = TestBed.get(
            HttpTestingController as Type<HttpTestingController>
        );
    });
    afterEach(() => {
        httpMock.verify();
    });

    beforeEach(() => {
        serviceTest = new TwitterService(http, logger);
    });
    describe('Constructor()', () => {
        it('should be created', () => {
            expect(serviceTest).to.exist;
        });
    });

    describe('getUserProfile()', () => {
        let spyObj = null;
        beforeEach(() => {
            spyObj = jasmine.createSpyObj(serviceTest, ['mapGetUserProfile']);
        });
        it('it should be truthy', () => {
            serviceTest.getUserProfile();
            expect(serviceTest.mapGetUserProfile).to.exist;
        });

        it('it should call mapGetUserProfile', () => {
            // serviceTest.mapGetUserProfile =  sinon.stub();

            // spyOn(serviceTest, 'getUserProfile').and.returnValue(of(profileMockData));
            //  spyOn(serviceTest, 'mapGetUserProfile');
            const spyObj = sinon.spy(serviceTest, 'mapGetUserProfile');
           // const mapGetUserProfileSpy = jasmine.createSpy('mapGetUserProfile');
            // let response = httpMock.expectOne({ url: environmentUrl + 'profile_info' });
            // response.flush(profileMockData);
            //httpMock.verify();
           // spyOn(serviceTest, 'mapGetUserProfile');
            const mapGetUserProfileSpy = spyOn(serviceTest, 'mapGetUserProfile').and.callThrough();
            serviceTest.getUserProfile().subscribe((res) => {
                // response = res;
                //    expect(spyObj).toBeTruthy();
                expect(spyObj).to.be.exist;
            });
        });
    });
});

