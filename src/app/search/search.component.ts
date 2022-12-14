import { Component, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';
import { Group } from '../group';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  groupNames: Group[] = [];

  constructor(private adService: AdService) { }

  ngOnInit() {
    this.adService.listGroups().subscribe((groups) => {
      console.log(groups);
      this.groupNames = groups;
    });
  }

}
