import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweetUserProfile } from '../../service';
import { Logger } from '../../../../core/logger.service';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss']
})
export class UserFeedComponent implements OnInit {
  @Input() 
  public userfeeddata: any = null;

  constructor(private logger: Logger) { }

  ngOnInit(): void {
    this.logger.debug(`UserFeedComponent`, `Input value ${this.userfeeddata}` );
  }

}
