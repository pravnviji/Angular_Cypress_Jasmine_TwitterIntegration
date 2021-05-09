import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { TwitterService, ITweetUserProfile } from '../../../../feature/twitter/service';
import { Logger } from '../../../../core/logger.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  public userProfileAsyncResult$: Observable<ITweetUserProfile> ;

  constructor(private _twitterService: TwitterService, private _logger: Logger) { }

  ngOnInit(): void {
    this.getUserProfile();
  }

  async getUserProfile(){
    this.userProfileAsyncResult$ = this._twitterService.getUserProfile();
    this._logger.debug(`UserprofileComponent`, this.userProfileAsyncResult$ );
  }

}
