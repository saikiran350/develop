import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultListService {

  // private baseURL = "https://jsonplaceholder.typicode.com/posts";
  // private productsObservable: Observable<any[]>;

  // private resultListObservable: Observable<any[]>;

  constructor(private http: HttpClient) { }

  public async getResultList(): Promise<any[]> {

    let resultList = [
      {
        id: 1,
        traiffname: "Java",
        options: "Python123",
        tariffbenefits: "tariffbenefit1",
        price: "100, 00",
        download: "20",
        downloadprefix:"Mbps",
        upload: "10.03",
        uploadprefix:"Mbps"
      },
      {
        id: 2,
        traiffname: "Python",
        options: "Python123",
        tariffbenefits: "tariffbenefit1",
        price: "200, 00",
        download: "15",
        downloadprefix:"Mbps",
        upload: "9.5",
        uploadprefix:"Mbps"
      },
      {
        id: 3,
        traiffname: "C",
        options: "Python123",
        tariffbenefits: "tariffbenefit1",
        price: "300, 00",
        download: "50",
        downloadprefix:"Mbps",
        upload: "20.5",
        uploadprefix:"Mbps"
      },
      {
        id: 4,
        traiffname: "Java",
        options: "Python123",
        tariffbenefits: "tariffbenefit1",
        price: "400, 00",
        download: "60",
        downloadprefix:"Mbps",
        upload: "40.05",
        uploadprefix:"Mbps"
      },
      {
        id: 5,
        traiffname: "PHP",
        options: "Python123",
        tariffbenefits: "tariffbenefit1",
        price: "500, 00",
        download: "100",
        downloadprefix:"Mbps",
        upload: "70.55",
        uploadprefix:"Mbps"
      },
    ];

    return resultList;
  }


  // getResultList() {
  //   const URL = `${this.baseURL}`;
  //   return this.http.get(URL);
  // }

}
