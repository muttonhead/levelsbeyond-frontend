import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IssuesService {
	ALL_ISSUES = 'https://api.github.com/repos/angular/angular/issues';
	SEARCH_ISSUES = 'https://api.github.com/search/issues';

	issues: any;

	constructor(private http: Http) { }

	public getAllIssues() {
		const since = new Date();
		since.setDate(since.getDate() - 7);
		this.http.get(this.ALL_ISSUES + '?since=' + since.toISOString()).subscribe(data => {
			this.issues = data;
		});
	}

	public searchIssues(term: string) {
		if (term == null || term.length === 0) {
			return this.getAllIssues();
		}
		const since = new Date();
		since.setDate(since.getDate() - 7);
		this.http.get(this.SEARCH_ISSUES + '?q=' + term + ' repo:angular/angular'
				+ ' created:>=' + since.toISOString().split('.')[0] + 'Z').subscribe((data: any) => {
			this.issues = data.items;
		});
	}
}
