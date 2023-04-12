import { Component, Input, OnInit } from '@angular/core';
import { FilterItem } from 'src/app/models/Filters/FilterItem';

@Component({
  selector: 'search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit{

  @Input() filterList: FilterItem[]
  @Input() placeholderStr: string | undefined

  selectedFilterList:FilterItem[] =[]

  constructor() { }

  ngOnInit(): void {
  }

 public check(filterItem: any){
    const filterId = this.selectedFilterList.indexOf(filterItem);
    if(filterId === -1){
         this.selectedFilterList.push(filterItem)
    }
    else{
      this.selectedFilterList.splice(filterId,1);
    }
  }

 public clean(){
    this.selectedFilterList = []
  }
}
