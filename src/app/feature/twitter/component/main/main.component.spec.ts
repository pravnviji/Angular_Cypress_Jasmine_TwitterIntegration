import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

import { TwitterServiceStub } from './main.service.mock';

import {
    ITweetUserProfile,
    ITweetUserHeadlines,
    ITweetResponse,
    ITweetUser,
} from '../../service/twitter-feed.interface';

import { TwitterService } from '../../service/twitter.service';
import { MainComponent, tranformResult } from './main.component';

import { Logger } from '../../../../core/logger.service';

class MockLoggerService {
    log() {
        return of(true);
    }
}

let twitterMasterResponseData: ITweetResponse = {
    user: {
        id: 851654519054364672,
        name: 'ABOUT YOU TECH',
        screen_name: 'ABOUT YOU TECH',
        location: 'Hamburg, Germany',
        profile_image_url:
            'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
        created_at: '2017-04-11T04:33:55.000Z',
        username: 'aboutyou_tech',
    } as ITweetUserProfile,
    getHeadLines: [
        {
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
            } as ITweetUser,
        },
    ] as ITweetUserHeadlines[],
    getUserTimeLines: [
        {
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
            } as ITweetUser,
        },
    ] as ITweetUserHeadlines[],
    getMentionTimeLines: [
        {
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
            } as ITweetUser,
        },
    ] as ITweetUserHeadlines[],
};

describe('MainComponent', () => {
    let component: MainComponent;
    let fixture: ComponentFixture<MainComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [],
            declarations: [MainComponent],
            providers: [
                { provide: TwitterService, useClass: TwitterServiceStub },
                { provide: Logger, userClass: MockLoggerService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnit() should called twitterData()', () => {
        component.ngOnInit();
        // tslint:disable-next-line: no-unused-expression
        expect(component.twitterData).toHaveBeenCalled;
    });

    it('twitterData() should create and call all service methods', () => {
        spyOn(component.twitterService, 'getUserProfile').and.callThrough();
        spyOn(component.twitterService, 'getHomeTimeLine').and.callThrough();
        spyOn(component.twitterService, 'getUserTimeLine').and.callThrough();
        spyOn(
            component.twitterService,
            'getUserMentionsTimeLine'
        ).and.callThrough();
        component.twitterData();
        expect(component.twitterService.getUserProfile).toHaveBeenCalled();
        expect(component.twitterService.getHomeTimeLine).toHaveBeenCalled();
        expect(component.twitterService.getUserTimeLine).toHaveBeenCalled();
        expect(
            component.twitterService.getUserMentionsTimeLine
        ).toHaveBeenCalled();
    });

    it('should set Error message when twitterData() is errored out', () => {
        const errorAsync = function () {
            throw new Error('error!');
        };
        spyOn(component, 'twitterData').and.returnValue(of(errorAsync));
        component.twitterData().subscribe((error) => {
            console.log(error);
            expect(component.onGetFeedError).toHaveBeenCalled();
        });
    });

    it('onGetFeedError() print the errors', () => {
        const error = 'test error';
        component.onGetFeedError(error);
        expect(component.logger).toBeTruthy();
    });
});

describe('tranformResult', () => {
    it('tranformResult() check return values', () => {
        const res = [
            {
                id: 851654519054364672,
                name: 'ABOUT YOU TECH',
                screen_name: 'ABOUT YOU TECH',
                location: 'Hamburg, Germany',
                profile_image_url:
                    'https://pbs.twimg.com/profile_images/1128599974906871808/c92l87A7_normal.png',
                created_at: '2017-04-11T04:33:55.000Z',
                username: 'aboutyou_tech',
            },
            [
                {
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
                    } as ITweetUser,
                },
            ],
            [
                {
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
                    } as ITweetUser,
                },
            ],
            [
                {
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
                    } as ITweetUser,
                },
            ],
        ];
        const result = tranformResult(res);
        expect(result).toEqual(twitterMasterResponseData);
    });
});
