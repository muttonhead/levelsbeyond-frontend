import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IssuesComponent } from './issues/issues.component';
import { IssuesService } from './issues.service';
import { IssueComponent } from './issue/issue.component';

@NgModule({
	declarations: [
		AppComponent,
		IssuesComponent,
		IssueComponent
	],
	imports: [
		BrowserModule,
		HttpModule
	],
	providers: [IssuesService],
	bootstrap: [AppComponent]
})
export class AppModule { }
