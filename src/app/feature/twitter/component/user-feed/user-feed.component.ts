import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITweetUserProfile } from '../../service';
import { Logger } from '../../../../core/logger.service';
import { DomSanitizer,  } from '@angular/platform-browser';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss']
})
export class UserFeedComponent implements OnInit {
  @Input() 
  public userfeeddata: any = null;
  public fullText: string;

  constructor(private logger: Logger,protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.logger.debug(`UserFeedComponent`, `Input value ${this.userfeeddata}` );
  }

  
  sanitizeUrl(contentHtml: string){
    const urlRegex = /(https?:\/\/[^ ]*)/;
    this.logger.debug(`UserFeedComponent`, `content HTML -->${contentHtml}` );
    this.logger.debug(``, contentHtml.match(urlRegex));
    const url = contentHtml.match(urlRegex) ? contentHtml.match(urlRegex)[1] : null;
    this.logger.debug(`UserFeedComponent`, `URL -->${url}` );
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  


  sanitizeText(contentText: string){
    const urlRegex = /(?:https?|ftp):\/\/[\n\S]+/g;
    this.logger.debug(`UserFeedComponent`, `content TEXT -->${contentText}` );
    const text = contentText.replace(urlRegex, '');
    this.logger.debug(`UserFeedComponent`, `TEXT -->${text}` );
    return this.sanitizer.bypassSecurityTrustHtml(text) ? this.sanitizer.bypassSecurityTrustHtml(text) : null;
  }

}
