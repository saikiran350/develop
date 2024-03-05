


import { Component, OnInit, ViewChild } from '@angular/core';
import { ResultListService } from '../result-list.service';
import { MatTableDataSource } from '@angular/material/table';
import { Resultlist } from '../models/resultlist';
import { MatSort, Sort } from '@angular/material/sort';



@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrl: './result-list.component.scss'
})
export class ResultListComponent implements OnInit {

  displayedColumns = [];
  public dataSource = new MatTableDataSource<Resultlist>;

  @ViewChild(MatSort) sort: MatSort;

  resultListObj: any[];

  ngAfterViewInit() {
    if (this.resultListObj != undefined) {
    }
  }

  constructor(private resultList: ResultListService) {
    this.getResultData();
  }

  getResultData() {
    this.resultList.getResultList().then(response => {
      this.resultListObj = response;

      this.displayedColumns = Object.keys(this.resultListObj[0]);
      this.sortData(this.sort, "id");
      this.dataSource = new MatTableDataSource(this.resultListObj);

      // this.dataSource.sort = this.sort;
    });
  }

  sortData(sort: Sort, columnName?: string) {
    this.resultListObj.sort(function (a, b) {
      if (sort.direction == "" || sort.direction !== "asc") {
        if(sort.active=="upload"|| sort.active=="download")
        {
          return a[sort.active]-b[sort.active];
        }
        return (a[sort.active] > b[sort.active]) ? 1 : ((a[sort.active] < b[sort.active]) ? -1 : 0);
      } else {
        if(sort.active=="upload"|| sort.active=="download")
        {
          return b[sort.active]-a[sort.active];
        }
        return (b[sort.active] > a[sort.active]) ? 1 : ((b[sort.active] < a[sort.active]) ? -1 : 0);
      }
    });
    this.dataSource = new MatTableDataSource(this.resultListObj);
  }


  // sortData(sort: Sort) {
  //   const data = this.resultListObj.slice();
  //   console.log("data ", data);
  //   console.log("data -- sort ", sort);
  //   if (!sort.active || sort.direction == '') {
  //     this.sortedData = data;
  //     return;
  //   }
  //   this.sortedData = data.sort((a, b) => {
  //     let isAsc = sort.direction == 'asc';
  //     switch (sort.active) {
  //       case 'download': return this.compare(a.download, b.download, isAsc);
  //       case 'upload': return this.compare(+a.upload, +b.upload, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }
  // compare(a, b, isAsc) {
  //   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  // }
  ngOnInit() {
    //   this.resultList.getResultList().subscribe((response: any) =>
    //     this.dataSource = new MatTableDataSource(response)
    //   ),
    //     (err: HttpErrorResponse) => {
    //       console.log(err);
    //     }
  }
}
