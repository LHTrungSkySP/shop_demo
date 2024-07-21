import { Component, HostListener, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimeLineValidator } from '../shared/validators/timeLineValidator';
import { Constants } from '../shared/constants/constants';
import { Calendar } from 'primeng/calendar';
import { FormValidator } from '../shared/validators/formValidator';
import { dateValidator } from '../shared/validators/dateValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'master-app';
  form!: FormGroup;
  isEditGeneralInfor = false;
  [key: string]: any;
  listStatus = [...Constants.TASK_STATUS_TYPE]; // danh sách trạng thái có thể chọn


  constructor(
    private fb: FormBuilder,

  ){
    this.form = fb.group({
      startTime: [null, [dateValidator()]],
      endTime: [null,  [ dateValidator()]],
      scheduleTime: [null,  [Validators.required, dateValidator()]],
      deadlineTime: [null,  [Validators.required, dateValidator()]]
    },{
      validators: Validators.compose([
        TimeLineValidator('startTime', 'endTime'),
        TimeLineValidator('scheduleTime', 'deadlineTime')
      ])
    });
  }
data: any = {
  isLock: false,
  startTime : new Date(2024, 5, 27, 10, 30),
  endTime: null,
  scheduleTime: new Date(2024, 5, 27, 10, 30),
  deadlineTime: new Date(2024, 5, 28, 10, 30),
}
ngOnInit(): void {
  this.initData();
}
initData(){
  this.form.controls['scheduleTime'].setValue(this.data.scheduleTime);
  this.form.controls['deadlineTime'].setValue(this.data.deadlineTime);
  this.form.controls['startTime'].setValue(this.data.startTime);
  this.form.controls['endTime'].setValue(this.data.endTime);
}
dataTimeEditing: Calendar | undefined;;
statusNameTimeEditing: string | undefined;
isEditScheduleTime: boolean = false;
isEditDeadlineTime: boolean = false;
isEditStartTime: boolean = false;
isEditEndTime: boolean = false;
@ViewChild('scheduleTime') scheduleTime: Calendar | undefined;
@ViewChild('deadlineTime') deadlineTime: Calendar | undefined;
@ViewChild('startTime') startTime: Calendar | undefined;
@ViewChild('endTime') endTime: Calendar | undefined;
@HostListener('document:click', ['$event'])
onDocumentClick(): void {
  if (!this.isEditGeneralInfor && !this.data.isLock) {
    let valid = FormValidator(this.form, true);
    if (this.statusNameTimeEditing) {
      this[this.statusNameTimeEditing] = false;
    }
    this.statusNameTimeEditing = undefined;
    if (this.dataTimeEditing) {
      this.dataTimeEditing = undefined;
    }
    if (!valid) {
      this.initData();
    }
  }
}
saveGeneralInfor(){
  let valid = FormValidator(this.form, true);
  if (!valid) {
    console.log(this.form);
    
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

}
    // statusChange: tên biến lưu trạng thái đóng mở
  // viewName: tên view child đang sửa
  // @Output: danh sách
  showEditOnView(statusChange: string, viewName: any) {
    if(!this.data.isLock){
      if (this.statusNameTimeEditing) {
        this[this.statusNameTimeEditing] = false;
      }
      this[statusChange] = true;
      this.statusNameTimeEditing = statusChange;
      this.dataTimeEditing = this[viewName];
      if (this[viewName]) {
        setTimeout(() => {
          this[viewName].inputfieldViewChild.nativeElement.focus();
        }, 0);
      }
    }
  }
  stopPropagation(event: any) {
    event.stopPropagation();
  }
  selectDateOnView(viewName: any) {
    let valid = FormValidator(this.form, true);
    if (!valid) {
      return;
    }
    if (this.statusNameTimeEditing) {
      this.data[viewName] = this.form.controls[viewName].value;
      this[this.statusNameTimeEditing] = false;
    }
    this.dataTimeEditing = undefined;
    // this.saveGeneralInfor();
  }
  //#endregion Customise Edit

}
