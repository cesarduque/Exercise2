import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'app-Angular';
	private _imageUrl: string;

	get imageUrl(): string {
		return this._imageUrl;
	}

	set imageUrl(value: string) {
		this._imageUrl = value;
	}

	constructor() {
		setInterval(() => this.generateRandomFace(), 1000);
	}
	generateRandomFace() {
		const baseUrl = 'https://api.adorable.io/avatars/500/';
		const urlSuffix = '@adorable.io.png';
		this.imageUrl = `${baseUrl}${Math.floor(Math.random() * 1000)}${urlSuffix}`;
	}
}
