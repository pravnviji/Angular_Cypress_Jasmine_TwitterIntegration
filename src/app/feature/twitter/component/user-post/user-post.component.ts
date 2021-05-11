import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

import { TwitterService } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent implements OnInit {
    @ViewChild('tweetArea') tweetArea: ElementRef;

    constructor(
        private _twitterService: TwitterService,
        private _logger: Logger
    ) {}

    ngOnInit(): void {
        this._logger.debug(`UserPostComponent`, ``);
    }

    postTweet(): void {
        this._logger.debug(`UserPostComponent`, `post tweet`);
        this._logger.debug(`UserPostComponent`, this.tweetArea.nativeElement.value);
        const reqObj = { status: this.tweetArea.nativeElement.value};
        this._twitterService.postUserTweet(reqObj).subscribe();

    }
}
