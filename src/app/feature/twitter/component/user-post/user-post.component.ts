import { Component, OnInit } from '@angular/core';

import { TwitterService } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit {

  constructor(private _twitterService: TwitterService, private _logger: Logger) { }

  ngOnInit(): void {
    this._logger.debug(`UserPostComponent`, `` );
  }

}
