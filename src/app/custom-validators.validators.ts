import { FormControl } from "@angular/forms";

export class CustomValidators {
  static url(control: FormControl): { [s: string]: boolean } {
    if (
      !control.value.match(
        /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
      )
    ) {
      return { url: true };
    }
  }
  static YearValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^(19|20)\d{2}$/)) {
      return { year: true };
    }
  }
}
