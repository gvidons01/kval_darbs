import { Component, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  groupTitle = null;
  groupCategories = null;

  constructor(
    public router: Router, 
    private adService: AdService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getGroup();
    this.adService.listCategories().subscribe((categories) => {
      console.log(categories);
      if (categories.group_id==1){
        this.groupCategories=categories;
      }
    });
  }

  getGroup(): void {
    
  }

}
