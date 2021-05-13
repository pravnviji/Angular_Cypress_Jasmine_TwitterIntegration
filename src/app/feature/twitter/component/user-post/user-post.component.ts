import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TwitterService, ITweetUserProfile } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
    selector: 'app-user-post',
    templateUrl: './user-post.component.html',
    styleUrls: ['./user-post.component.scss'],
})
export class UserPostComponent implements OnInit {
    @Input() 
    public userfeeddata: any;
    public tweet: string;
    public fileName = `UserPostComponent`;


    constructor(
        private twitterService: TwitterService,
        private logger: Logger
    ) {}

    ngOnInit(): void {
        this.logger.debug(this.fileName, `userFeeddata`);
        this.logger.debug(this.fileName, this.userfeeddata);
    }

    postTweet = () => {
        this.logger.debug(this.fileName, `post tweet`);
        this.logger.debug(this.fileName, this.tweet);
        const reqObj = { status: this.tweet};
        this.twitterService.postUserTweet(reqObj).subscribe(this.postedTweet);
    }

    public postedTweet = (result: any) => {
      this.logger.debug(this.fileName, `postedTweet`);
      this.logger.debug(this.fileName, result);
      this.showModal(result);
      
    }

    public showModal = (result) => {
        this.tweet = '';
        if (result.data && result.resp.statusCode === 200){
            alert(`Successfully tweet posted`);
        } else if (result.statusCode === 403){
            alert(` Sorry Content already posted `);
        }
    }
}
