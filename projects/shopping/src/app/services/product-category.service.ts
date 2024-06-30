import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {
  filter(params: any): Observable<any>{
    return of(
      {
        id: 1,
        name: 'Bộ bát đĩa Bát Tràng',
        seoAlias: 'bo-bat-dia-bat-trang',
        children: [
          {
            id: 2,
            name: 'Bộ bát đĩa đầy đủ Bát Tràng',
            seoAlias: 'bo-bat-dia',
          },
          {
            id: 3,
            name: 'Khay mứt Bát Tràng',
            seoAlias: 'khay-mut',
          },
          {
            id: 4,
            name: 'Tô đựng phở bún',
            seoAlias: 'to-dung-pho-bun',
          }
        ]
      },
      {
        id: 5,
        name: 'Ấm chén Bát Tràng',
        seoAlias: 'am-chen-bat-trang',
        children: [
          {
            id: 6,
            name: 'Ấm ché bọc đồng Bát Tràng',
            seoAlias: 'am-chen-boc-dong',
          },
          {
            id: 7,
            name: 'Ấm chén cao cấp Bát Tràng',
            seoAlias: 'am-chen-cao-cap',
          },
          {
            id: 8,
            name: 'Ấm chén cổ Bát Tràng',
            seoAlias: 'to-dung-pho-bun',
          }
        ]
      },
      {
        id: 9,
        name: 'Chum Bát Tràng',
        seoAlias: 'chum-bat-trang',
        children: [
          {
            id: 10,
            name: 'Chum đựng rượu Bát Tràng',
            seoAlias: 'chum-dung-ruou',
          },
          {
            id: 11,
            name: 'Hũ gạo Bát Tràng',
            seoAlias: 'hu-gao',
          },
        ]
      },
      {
        id: 12,
        name: 'Lọ hoa Bát Tràng',
        seoAlias: 'lo-hoa-bat-trang',
        children: [
          {
            id: 13,
            name: 'Lọ Hoa Men Màu Bát Tràng',
            seoAlias: 'lo-hoa-men-mau',
          },
          {
            id: 14,
            name: 'Lọ Hoa Khắc Nổi Bát Tràng',
            seoAlias: 'lo-hoa-khac-noi',
          },
        ]
      },
      {
        id: 15,
        name: 'Đồ Thờ Bát Tràng',
        seoAlias: 'do-tho-bat-trang',
        children: [
          {
            id: 16,
            name: 'Bộ Đồ Thờ Cúng Bát Tràng',
            seoAlias: 'bo-do-tho-bat-trang',
          },
          {
            id: 17,
            name: 'Bát Hương Bát Tràng',
            seoAlias: 'bat-huong-bat-trang',
          },
        ]
      },
    )
  }
}

// import { BaseService } from './base-service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AssignService extends BaseService {
//     override url: string = "cmtask";
//     assignTask(param: any): Observable<any>{
//       return this.post(`${this.url}/assigntask`, param);
//     }

//   }
//   get(url: string, params?: any, responseType?: string): Observable<any> {
//     if(params){
//       for(var key in params){
//         if(params[key] === undefined || params[key] === null){
//           delete params[key];
//         }
//       }
//     }
//     switch (responseType) {
//       case 'text':
//         return this.httpClient.get(
//           this.getBaseUrl() + url,
//           {
//             headers: this.createHeaders().set('skipLoading', 'true') || {},
//             params,
//             responseType: 'text',
//           }
//         );
//       case 'blob':
//         return this.httpClient.get(
//           this.getBaseUrl() + url,
//           {
//             headers: this.createHeaders().set('skipLoading', 'true') || {},
//             params,
//             responseType: 'blob',
//           }
//         );
//       default:
//         return this.httpClient.get(
//           this.getBaseUrl() + url,
//           {
//             headers: this.createHeaders().set('skipLoading', 'true') || {},
//             params,
//           }
//         );
//     }
//   }