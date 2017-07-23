import { fakeAsync, TestBed, inject, tick } from '@angular/core/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { IssuesService } from './issues.service';

const issues = [
	{
		id: 1,
		title: 'test',
		body: 'test body',
		user: { login: 'test user' },
		assignee: { login: 'test assignee' }
	}
];

describe('IssuesService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				IssuesService,
				MockBackend,
				BaseRequestOptions,
				{
					provide: Http,
					useFactory: (backend, options) => new Http(backend, options),
					deps: [MockBackend, BaseRequestOptions]
				}],
			imports: [HttpModule]
		});
		this.issuesService = TestBed.get(IssuesService);
		this.backend = TestBed.get(MockBackend);
		this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
	});

	it('should be created', inject([IssuesService], (service: IssuesService) => {
		expect(service).toBeTruthy();
	}));

	it('gets all issues', fakeAsync(() => {
		this.issuesService.getAllIssues();
		this.lastConnection.mockRespond(issues);
		tick();

		expect(this.lastConnection).toBeDefined('no http service connection at all?');
		expect(this.lastConnection.request.url.startsWith('https://api.github.com/repos/angular/angular/issues')).toBeTruthy();
		expect(this.issuesService.issues).toEqual(issues);
	}));

	it('searches issues with the given term', fakeAsync(() => {
		this.issuesService.searchIssues('term');
		this.lastConnection.mockRespond({items: issues});
		tick();

		expect(this.lastConnection).toBeDefined('no http service connection at all?');
		expect(this.lastConnection.request.url.startsWith('https://api.github.com/search/issues?q=term')).toBeTruthy();
		expect(this.issuesService.issues).toEqual(issues);
	}));
});
