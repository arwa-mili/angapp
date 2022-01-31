import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
 info={
    nom:"arwa",
    email:"mili.arwa.ma@gmail.com",
    tel:99812522
  } 
  comments=[
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"}
  ];
 
  infos:any;
  
  
  
  commentaire:any={date:null,message:""}

  constructor(private aboutService:AboutService) {
    this.infos= this.aboutService.getInfo();
    this.comments=this.aboutService.getAllComments();
   }

  ngOnInit(): void {
  }
  
  
 

  onAddCommentaires(c :any){
    //this.commentaire.message=c;
    c.date= new Date();
    this.comments.push(c);
    this.commentaire.message="";
    
  }
 
 
 
 
 }

  
