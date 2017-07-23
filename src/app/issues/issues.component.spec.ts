import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModule } from '../app.module';
import { IssuesComponent } from './issues.component';
import { IssuesService } from '../issues.service';

class MockIssuesService {
	issues = [
		{
			id: 1,
			title: 'test',
			body: 'test body',
			user: { login: 'test user' },
			assignee: { login: 'test assignee' }
		}
	];

	getAllIssues() {}

	searchIssues(term: string) {}
}

describe('IssuesComponent', () => {
	let component: IssuesComponent;
	let fixture: ComponentFixture<IssuesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule
			],
			providers: [{provide: IssuesService, useClass: MockIssuesService}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IssuesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render title to h1 tag', () => {
		const compiled = fixture.debugElement.nativeElement;
		console.log(compiled.querySelector('h1'));
		expect(compiled.querySelector('h1').textContent).toEqual('Angular Issues - Last 7 Days');
	});

	it('should render each issue in app-issue tag', () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelectorAll('li').length).toEqual(1);
		expect(compiled.querySelectorAll('app-issue').length).toEqual(1);
	});
});
