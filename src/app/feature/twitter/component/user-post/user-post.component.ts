import { Component, OnInit } from '@angular/core';

import { TwitterService } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent implements OnInit {
    public tweet: string;

    constructor(
        private _twitterService: TwitterService,
        private _logger: Logger
    ) {}

    ngOnInit(): void {
        this._logger.debug(`UserPostComponent`, ``);
    }

    postTweet = () => {
        this._logger.debug(`UserPostComponent`, `post tweet`);
        this._logger.debug(`UserPostComponent`, this.tweet);
        const reqObj = { status: this.tweet};
        this._twitterService.postUserTweet(reqObj).subscribe(this.postedTweet);

    }

    public postedTweet = (result: any) => {
      this._logger.debug(`UserPostComponent`, `postedTweet`);
      this._logger.debug(`UserPostComponent`, result);
      this.showModal(result);
      
    }

    public showModal = (result) => {
        this.tweet = '';
        if (result.resp.statusCode === 200){
            alert(`Successfully tweet posted`);
        } else {
            alert(` Post is not successfully`);
        }
    }
}
