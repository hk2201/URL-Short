import { Component, VERSION } from '@angular/core';
import { NgTinyUrlService } from 'ng-tiny-url';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  model = {
    inputUrl: '',
  };
  isFormSubmitted = false;
  shortUrl = '';
  isTextCopied = false;
  isLoading = false;
  constructor(private tinyUrlService: NgTinyUrlService) {}

  onSubmitUrlForm(urlForm: NgForm) {
    if (urlForm.valid) {
      this.isLoading = true;
      this.tinyUrlService.shorten(this.model.inputUrl).subscribe(
        (data) => {
          this.shortUrl = data;
          this.isFormSubmitted = true;
          this.isLoading = false;
        },
        (error) => {
          alert('Something Went Wrong. Please check your url and try again');
          this.isLoading = false;
        }
      );
    }
  }

  copyUrl(shortUrlElementRef: Element) {
    let inputElement = document.createElement('input');

    inputElement.setAttribute('type', 'text');
    inputElement.setAttribute('value', shortUrlElementRef.innerHTML);

    inputElement.select();
    inputElement.setSelectionRange(0, 999999); // For Mobile Selection
    try {
      navigator.clipboard.writeText(inputElement.value);

      this.isTextCopied = true;

      setTimeout(() => {
        this.isTextCopied = false;
      }, 2000);
    } catch (e) {
      console.log('error while copying..');
    }
  }

  reset() {
    this.model.inputUrl = '';
    this.isFormSubmitted = false;
    this.isTextCopied = false;
  }
}
