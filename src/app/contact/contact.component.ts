import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
      
  public contact={
    name:"ENISo",
    email:"mili.arwa.ma@gmail.com",
    telephone:"+21699812522",
    logo:"assets/images/eniso.png",
    location:"Sahloul-Omran ceinture",
    loc:"assets/images/location.png"
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
