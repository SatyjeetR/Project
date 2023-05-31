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
  public ShowSessionsList: boolean = false;




  // showDialog(position: string) {
  //   this.position = position;
  //   this.visible = true;
  // }


  public data: any = [
    {
      title: "Medicine",
      headCSS:"group-title",
      heading1: [
        { lable: "DashBoard", RouterLink: "" },
        { lable: "Appointments", RouterLink: "Appointments" },
        { lable: "Doctors", RouterLink: "Doctors" },
        { lable: "Departments", RouterLink: "Departments" },
        { lable: "Patients", RouterLink: "Patients" },
        { lable: "Payments", RouterLink: "Payments" },
      ],
    },
    {
      title: "UIKIT",
      headCSS:"group-title",
      
      heading1: [

        { lable: "Components", RouterLink: "Components" },
        { lable: "Icons", RouterLink: "Icons" },
        { lable: "Typography", RouterLink: "Typography" },
        { lable: "Tables", RouterLink: "Tables" },
        { lable: "Forms", RouterLink: "Forms" },
        { lable: "Charts", RouterLink: "Charts" },
        { lable: "Maps", RouterLink: "Maps" },
      ],
    },
    // {
    //   title: "APPS",
    //   headCSS:"group-title",
      
    //   heading1: [

    //     { lable: "Service_pages", RouterLink: "Service pages" },
    //     { lable: "Sessions", RouterLink: "Sessions" },
    //   ],

    // },


  ]




  ShowSer() {
    this.ShowSessionsList = false;
    this.ShowServiceList = true;
  }

  HideSer() {

    this.ShowServiceList = false;

  }





  ShowSession() {
    this.ShowServiceList = false;
    this.ShowSessionsList = true;

  }
  HideSessions() {

    this.ShowSessionsList = false;
  }





}
