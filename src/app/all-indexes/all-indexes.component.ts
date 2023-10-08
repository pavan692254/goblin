import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.services';

@Component({
  selector: 'app-all-indexes',
  templateUrl: './all-indexes.component.html',
  styleUrls: ['./all-indexes.component.scss']
})
export class AllIndexesComponent implements OnInit {

  constructor(private http: HttpService) {

  }
  ngOnInit() {
    this.getIndex();
  }
  getIndex() {
    console.log('getIndex1 >>>>');
    this.http.get('https://www.nseindia.com/json/option-chain/option-chain.json').subscribe(
      (data: any) => {
        console.log('data >>>>',data);
      },
      (err: any) => {
        console.log('data >>>>',err);
      }
    );
  }
}
