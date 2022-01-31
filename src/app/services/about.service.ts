import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  info={
    nom:"arwa",
    email:"mili.arwa.ma@gmail.com",
    tel:23676473
  } 
  comments=[
    {date:new Date(),message:"A"},
    {date:new Date(),message:"B"},
    {date:new Date(),message:"C"}
  ];

  constructor() { }

  addComment(c :any){
    c.date= new Date();
    this.comments.push(c);
  }

  getAllComments(){
    return this.comments;
  }

  getInfo(){
    return this.info;
  }
}

