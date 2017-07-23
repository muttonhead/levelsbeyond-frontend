import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueComponent } from './issue.component';

describe('IssueComponent', () => {
	let component: IssueComponent;
	let fixture: ComponentFixture<IssueComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ IssueComponent ]
		})
		.compileComponents();

	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IssueComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});

	it('should render the issue', () => {
		fixture.componentInstance.issue = {
			id: 1,
			title: 'test',
			body: 'test body',
			user: { login: 'test user' },
			assignee: { login: 'test assignee' }
		};
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;

		expect(compiled.querySelector('h2').textContent).toEqual('test');
		expect(compiled.querySelectorAll('p').length).toEqual(3);
		expect(compiled.querySelectorAll('p')[0].textContent).toEqual('User: test user');
		expect(compiled.querySelectorAll('p')[1].textContent).toEqual('Assignee: test assignee');
		expect(compiled.querySelectorAll('p')[2].textContent).toEqual('test body');
	});

	it('should set assignee to Unassigned if assignee is null', () => {
		fixture.componentInstance.issue = {
			id: 1,
			title: 'test',
			body: 'test body',
			user: { login: 'test user' },
			assignee: null
		};
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;

		expect(compiled.querySelectorAll('p')[1].textContent).toEqual('Assignee: Unassigned');
	});
});
