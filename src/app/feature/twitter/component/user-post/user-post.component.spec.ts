import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { UserPostComponent } from './user-post.component';
import { TwitterServiceStub } from '../main/main.service.mock';

import { TwitterService } from '../../service/twitter.service';

import { Logger } from '../../../../core/logger.service';

class MockLoggerService {
    log() {
        return of(true);
    }
}

describe('UserPostComponent', () => {
    let component: UserPostComponent;
    let fixture: ComponentFixture<UserPostComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserPostComponent],
            providers: [
                { provide: TwitterService, useClass: TwitterServiceStub },
                { provide: Logger, userClass: MockLoggerService },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserPostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnit() should called logger', () => {
        component.ngOnInit();
        expect(component.logger).toBeTruthy();
    });

    it('postTweet() should called postedTweet method with mockresult', () => {
       component.tweet = 'test';
       component.postTweet();
       component.twitterService.postUserTweet(component.tweet ).subscribe(res =>{
        expect(component.postedTweet).toHaveBeenCalledWith(res);
      });
    });

    it('postedTweet() should called showModal method with mockresult', () => {
      const result = { data : { description : 'test'}, resp: { statusCode : 200}};
      spyOn(component, 'showModal').withArgs(result).and.callThrough();
      component.postedTweet(result);
      expect(component.showModal).toHaveBeenCalledWith(result);
   });

    it('showModal() should call alert if statusCode is 200', () => {
    const result = { data : { description : 'test'}, resp: { statusCode : 200}};
    spyOn(window, 'alert');
    component.showModal(result);
    expect(window.alert).toHaveBeenCalledWith(`Successfully posted. Please refresh the page`);
 });

    it('showModal() should call alert if statusCode is  403', () => {
  const result = { statusCode : 403 };
  spyOn(window, 'alert');
  component.showModal(result);
  expect(window.alert).toHaveBeenCalledWith(` Sorry Content already posted | Server configuration is not correct`);
});
});
