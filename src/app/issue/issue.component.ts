import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-issue',
	templateUrl: './issue.component.html',
	styleUrls: ['./issue.component.css']
})
export class IssueComponent {
	@Input() issue: any;
}
