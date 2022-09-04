
import { Observable } from "rxjs";
import { JardinService } from 'src/app/Services/jardin.service';
import { Jardin } from 'src/app/Models/jardin';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-jardin-list",
  templateUrl: "./jardin-list.component.html",
  styleUrls: ["./jardin-list.component.css"]
})
export class JardinListComponent implements OnInit {
  jardins: Observable<Jardin[]>;

  constructor(private jardinService: JardinService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.jardins = this.jardinService.retrieveAllJardins();
  }

  
  removeJardin(jardin_id: number) {
    this.jardinService.removeJardin(jardin_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['/reclamations']);
  }

  affectercoutjardin(jardin_id: number){
    this.router.navigate(['affectercoutjardin', jardin_id]);
  }

  jardinDetails(jardin_id: number){
    this.router.navigate(['details', jardin_id]);
  }

  modifyJardin(jardin_id: number){
    this.router.navigate(['update', jardin_id]);
  }
}
