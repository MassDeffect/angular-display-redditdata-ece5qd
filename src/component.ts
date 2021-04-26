import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { DataService } from "./service";

@Component({
  selector: "my-app",
  templateUrl: "./component.html",
  styleUrls: ["./component.css"]
})
export class AppComponent {
  name = "GetData";

  private dataListAngular = [];
  private dataListDotnet = [];
  private dataListSql = [];

  constructor(
    private dataServiceAngular: DataService,
    private dataServiceDotnet: DataService,
    private dataServiceSql: DataService
  ) {
    this.dataServiceAngular.getAngularInfos().subscribe((res: any[]) => {
      console.log(res.data.children);
      this.dataListAngular = res.data.children;
    });
    this.dataServiceDotnet.getDotnetInfos().subscribe((res: any[]) => {
      console.log(res.data.children);
      this.dataListDotnet = res.data.children;
    });
    this.dataServiceSql.getSqlInfos().subscribe((res: any[]) => {
      console.log(res.data.children);
      this.dataListSql = res.data.children;
    });
  }
}
