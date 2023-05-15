import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  value: string="";
  value2: string="";


  // visible: boolean = false;

  // public position: string = "";


  // public ShowSer:boolean= false;
  public ShowServiceList: boolean = false;
  // public ShowSessionsList: boolean = false;




  // showDialog(position: string) {
  //   this.position = position;
  //   this.visible = true;
  // }


  public data: any = [
    {
      title: "Medicine",
   
      heading1: [

        { lable: "DashBoard", RouterLink: "" },
        { lable: "Appointments", RouterLink: "Appointments" },
        { lable: "Doctors", RouterLink: "Doctors" },
      ],

    },
    {
      title: "UIKIT",
      headCSS:"group-title",
      
      heading1: [

        { lable: "Components", RouterLink: "" },
        { lable: "Icons", RouterLink: "" },
        { lable: "Typography", RouterLink: "" },
      ],

    },


  ]




  ShowSer() {
    this.ShowServiceList = true;
  }

  HideSer() {
    this.ShowServiceList = false;

  }



  ShowSession() {
    this.ShowServiceList = false;


  }

  // ShowSession() {
  //   this.ShowSessionsList = true;

  // }
  // HideSessions() {

  //   this.ShowSessionsList = false;
  // }





}
