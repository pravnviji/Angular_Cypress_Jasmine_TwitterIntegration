import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserFeedComponent } from './user-feed.component';
import { Logger } from '../../../../core/logger.service';
import { DomSanitizer } from '@angular/platform-browser';

class MockLoggerService {
    log() {
        return of(true);
    }
}

describe('UserFeedComponent', () => {
    let component: UserFeedComponent;
    let fixture: ComponentFixture<UserFeedComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UserFeedComponent],
            providers: [
                { provide: Logger, userClass: MockLoggerService },
                {
                    provide: DomSanitizer,
                    useValue: {
                        sanitize: () => 'safeString',
                        bypassSecurityTrustHtml: () => 'safeString',
                        bypassSecurityTrustResourceUrl: () =>
                            'https://google.com',
                    },
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UserFeedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('sanitizeUrl() return URL if contentHtml has URL', () => {
        const contentHtml = 'Test with url https://google.com';
        const result = component.sanitizeUrl(contentHtml);
        expect(result).toBe('https://google.com');
    });

    it('sanitizeUrl() return null if contentHtml doesnt have URL', () => {
        const contentHtml = 'Test without url';
        const result = component.sanitizeUrl(contentHtml);
        expect(result).not.toBe(contentHtml);
    });

    it('sanitizeText() replace text with url, if contentText has url ', () => {
        const contentHtml = 'safeString https://google.com';
        const result = component.sanitizeText(contentHtml);
        expect(result).toBe('safeString');
    });
});
