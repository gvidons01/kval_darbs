import { Component, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  groupCategories = null;

  constructor(
    public router: Router, 
    private adService: AdService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getGroup();

    /*this.adService.listCategories().subscribe((categories) => {
      console.log(categories);
      this.groupInfo=categories[0];
      this.groupCategories=categories[1];
    });*/
  }

  getGroup(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));

  }
}
