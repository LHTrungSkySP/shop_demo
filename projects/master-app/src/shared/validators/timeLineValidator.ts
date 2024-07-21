import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { formatDateYYYYMMDDHHMM } from '../utilities/format-date-yyyymmddhhmm';
import { ValidatorMess } from '../constants/constants';
// FormControl có ValidatorMess nhỏ hơn controlNameTimeEnd
// @controlNameTimeStart - ngày bắt đầu
// @controlNameTimeEnd - ngày kết thúc
export function TimeLineValidator(controlNameTimeStart: string, controlNameTimeEnd: string): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const startControl = formGroup.get(controlNameTimeStart);
    const endControl = formGroup.get(controlNameTimeEnd);
    if (startControl && endControl) {
      // Clear existing errors to reset the state
      if (startControl.errors && startControl.errors?.['validTime']) {
        startControl.setErrors(null);
      }
      if (endControl.errors && endControl.errors?.['validTime']) {
        endControl.setErrors(null);
      }
      if (startControl.value && endControl.value) {
        if (formatDateYYYYMMDDHHMM(new Date(startControl.value)) >= formatDateYYYYMMDDHHMM(new Date(endControl.value))) {
          startControl.setErrors({ validTime: true, mess: ValidatorMess.INVALID_TIME_LINE });
          endControl.setErrors({ validTime: true, mess: ValidatorMess.INVALID_TIME_LINE });
        }
      }
    }
    return null;
  };
}
