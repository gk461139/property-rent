import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtableService } from 'src/app/service/artable.service';

@Component({
  selector: 'app-add-profiles',
  templateUrl: './add-profiles.component.html',
  styleUrls: ['./add-profiles.component.css']
})
export class AddProfilesComponent implements OnInit {
  submitted = false;
  propertyFrom:FormGroup;
  constructor(private fb:FormBuilder,private _service:ArtableService) {
    this.propertyFrom = this.fb.group({
      Name:[''],
      Description:[''],
      Size:['']
    });
  }
  ngOnInit(): void {
  }

  get f(){
    return this.propertyFrom.controls;
  }
  onSubmit(){
    if(this.propertyFrom.invalid)
    return;
    this. submitted = true
    console.log(this.propertyFrom.value);
    let data= {"fields":{
      Name:this.propertyFrom.get('Name')?.value,
      Description:this.propertyFrom.get('Description')?.value,
      Size:this.propertyFrom.get('Size')?.value
    }}
   let d = { "records": [data]}
    this._service.postPosts(d).subscribe(res=>{alert('Your Data is Added in list'); this.propertyFrom.reset()},(err)=>console.log(err))

  }

}
