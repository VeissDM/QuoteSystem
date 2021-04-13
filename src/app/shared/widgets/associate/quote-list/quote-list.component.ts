import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/shared/services/quote.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})

export class QuoteListComponent implements OnInit {
  quoteList: any = [
    {quoteID: '', username: '', customer: ''}
  ];

  displayedColumns: string[] = ['quoteID', 'username', 'customer'];
  dataSource: any;

  constructor(
    private _quote: QuoteService,
  ) { 
    this.loadQuotes();
  }

  ngOnInit(): void {
  }

  loadQuotes() {
    this._quote.getQuotes().subscribe(quotes =>{
      this.quoteList = quotes;
      this.dataSource = this.quoteList;
    })
  }

}