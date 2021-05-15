import { TestBed, getTestBed } from '@angular/core/testing';

import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { ITweetUserProfile, ITweetUserHeadlines } from './twitter-feed.interface';

import { TwitterService } from './twitter.service';
declare var require: any;

const dummyUserProfile: ITweetUserProfile = {
    id: 851654519054364672,
    name: 'ABOUT YOU TECH',
    screen_name: 'ABOUT YOU TECH',
    location: 'Hamburg, Germany',
    profile_image_url:
        'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
    created_at: '2017-04-11T04:33:55.000Z',
    username: 'aboutyou_tech',
};

const dummyUserHeadLine: ITweetUserHeadlines = {
        id: 1,
        full_text: 'sample test',
        created_at: '2017-04-11T04:33:55.000Z',
        retweat_count: 1,
        favorite_count: 2,
        user: {
            profile_image_url:
                'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
            profile_banner_url:
                'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
            name: 'itsallwidgets',
            screen_name: 'itsallwidgets',
            created_at: '2017-04-11T04:33:55.000Z',
        },
    };

describe('TwitterService', () => {
    let serviceTest: TwitterService;
    let httpMock: HttpTestingController;
    let injector: TestBed;

    const environmentUrl = 'http://localhost:3000/';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [TwitterService],
        });

        injector = getTestBed();
        serviceTest = injector.get(TwitterService);
        httpMock = injector.get(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });

    it('should be created', () => {
        expect(serviceTest).toBeTruthy();
    });

    it('getUserProfile() should check valid URL and mapGetUserProfile should called', () => {
        serviceTest.getUserProfile().subscribe((res) => {});
        const reqMock = httpMock.expectOne(
            (req) =>
                req.method === 'GET' &&
                req.url === environmentUrl + 'profile_info'
        );
        expect(reqMock.request.method).toBe('GET');
        reqMock.flush(dummyUserProfile);
    });
    it('getHomeTimeLine()  should check valid URL and mapGetHomeTimeline should called', () => {
        serviceTest.getHomeTimeLine().subscribe((res) => {});
        const reqMock = httpMock.expectOne(
            (req) =>
                req.method === 'GET' &&
                req.url === environmentUrl + 'home_timeline'
        );
        expect(reqMock.request.method).toBe('GET');
        reqMock.flush(dummyUserHeadLine);
    });

    it('getUserTimeLine()  should check valid URL and mapGetHomeTimeline should called', () => {
        serviceTest.getUserTimeLine().subscribe((res) => {});
        const reqMock = httpMock.expectOne(
            (req) =>
                req.method === 'GET' &&
                req.url === environmentUrl + 'user_timeline'
        );
        expect(reqMock.request.method).toBe('GET');
        reqMock.flush(dummyUserHeadLine);
    });

    it('getUserMentionsTimeLine()  should check valid URL and mapGetHomeTimeline should called', () => {
        serviceTest.getUserMentionsTimeLine().subscribe((res) => {});
        const reqMock = httpMock.expectOne(
            (req) =>
                req.method === 'GET' &&
                req.url === environmentUrl + 'mentions_timeline'
        );
        expect(reqMock.request.method).toBe('GET');
        reqMock.flush(dummyUserHeadLine);
    });

    it('postUserTweet()  should check valid URL and mapGetHomeTimeline should called', () => {
        const param = { status: 'test' };
        serviceTest.postUserTweet(param).subscribe((res) => {});
        const reqMock3 = httpMock.expectOne(
            (req) =>
                req.method === 'POST' &&
                req.url === environmentUrl + 'post_tweet' &&
                req.body === param
        );
        expect(reqMock3.request.method).toBe('POST');
        reqMock3.flush(param);
    });

    it('mapGetUserProfile()  should check return valid data, if resp and statuscode === 200', () => {
        const resultData = {
            resp: {
                status: 'true',
                statusCode: 200,
            },
            data: {
                data: {
                    id: 851654519054364672,
                    name: 'ABOUT YOU TECH',
                    screen_name: 'ABOUT YOU TECH',
                    location: 'Hamburg, Germany',
                    profile_image_url:
                        'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                    created_at: '2017-04-11T04:33:55.000Z',
                    username: 'aboutyou_tech',
                },
            },
        };
        const result = serviceTest.mapGetUserProfile(resultData);
        expect(result).toEqual(dummyUserProfile);
    });

    it('mapGetUserProfile()  should check return null, if resp and statuscode !== 200', () => {
        const resultData = {
            data: null,
        };
        const result = serviceTest.mapGetUserProfile(resultData);
        expect(result).toEqual(null);
    });

    it('mapGetHomeTimeline()  should check return valid data, if resp and statuscode === 200', () => {
        const resultData2 = {
            resp: {
                status: 'true',
                statusCode: 200,
            },
                data: [{
                    id: 1,
                    full_text: 'sample test',
                    created_at: '2017-04-11T04:33:55.000Z',
                    retweat_count: 1,
                    favorite_count: 2,
                    user: {
                        profile_image_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        profile_banner_url:
                            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                        name: 'itsallwidgets',
                        screen_name: 'itsallwidgets',
                        created_at: '2017-04-11T04:33:55.000Z',
                    },
                }]
            
        };
        const result = serviceTest.mapGetHomeTimeline(resultData2);
        expect(result).toEqual([dummyUserHeadLine]);
    });

    it('mapGetUserProfile()  should check return null, if resp and statuscode !== 200', () => {
        const resultData = {
            data: null,
        };
        const result = serviceTest.mapGetUserProfile(resultData);
        expect(result).toEqual(null);
    });
});
