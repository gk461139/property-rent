import { Component, OnInit } from '@angular/core';
import { ArtableService } from 'src/app/service/artable.service';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-lists.component.html',
  styleUrls: ['./view-lists.component.css']
})

export class ViewListsComponent implements OnInit {
  pageData:any;
  constructor(private _service:ArtableService){}
  ngOnInit(): void {
    this._service.getPosts().subscribe(res=>{this.pageData=res;console.log(res);})
  }


  // AddProperty
}
