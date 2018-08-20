import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('f') form: NgForm;
	genders: String[] = ['male', 'female'];
	user = {
		username: '',
		email: '',
		questionAnswer: '',
		secret: '',
		gender: '',
	}
	submitted: boolean = false;


	suggestUserName() {
		const suggestedName = 'Superuser';

		// this.form.setValue({
		// 	userData: {
		// 		username: suggestedName,
		// 		email: ''
		// 	},
		// 	questionAnswer : '',
		// 	secret: '',
		// 	gender: 'male'
		// })
		this.form.form.patchValue({
			userData: {
				username: suggestedName,
			}
		})
	}

	// onSubmit(form: NgForm) {
	// 	console.log(form);
	// }

	onSubmit() {
		this.submitted = true;
		this.user.username = this.form.value.userData.username;
		this.user.email = this.form.value.userData.email;
		this.user.questionAnswer = this.form.value.questionAnswer;
		this.user.secret = this.form.value.secret;
		this.user.gender = this.form.value.gender;

		this.form.reset();

		console.log(this.form);
	}
}
