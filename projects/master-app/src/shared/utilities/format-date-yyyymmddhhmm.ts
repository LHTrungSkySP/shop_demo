import { DatePipe } from '@angular/common';
// @value: ngày cần lấy ra yyyy-mm-dd hh-mm 
// chuỗi yyyymmddhhmm 
export function formatDateYYYYMMDDHHMM(value: Date): string{
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'yyyyMMddHHmm') ?? '0';
}