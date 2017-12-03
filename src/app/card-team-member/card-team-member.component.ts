import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card-team-member',
	template: `
      <div class="team-member-box">
          <h5>{{name}}</h5>
          <p style="color: darkgray;">{{position}}</p>
          <div class="team-image-wrapper">
						<span class="team-image-hover">
		          <span class="team-hover-content">
		            <a href="{{urlTwitter}}" style="padding:5px" target="_blank">
		              <i class="fa fa-twitter" aria-hidden="true"></i>
		            </a>
		            <a href="{{urlFacebook}}" style="padding:5px" target="_blank">
		              <i class="fa fa-facebook" aria-hidden="true"></i>
		            </a>
		            <a href="{{urlLinkedIn}}" style="padding:5px" target="_blank">
		             <i class="fa fa-linkedin" aria-hidden="true"></i>
		            </a>
		          </span>
						</span>
              <img src="{{urlProfile}}" alt="Member" 
                   class="img-responsive img-circle team-member-img">
          </div>
      </div>
	`,
	styleUrls: ['./card-team-member.component.css']
})

export class CardTeamMemberComponent implements OnInit {

	@Input() name: string;
	@Input() position: string;
	@Input() urlProfile: string;
	@Input() urlFacebook: string;
	@Input() urlTwitter: string;
	@Input() urlLinkedIn: string;

	constructor() {
	}

	ngOnInit() {
	}

}
