import { Component, OnInit } from '@angular/core';
import { Jardin } from 'src/app/Models/jardin';

import { ActivatedRoute, Router } from '@angular/router';
import { JardinService } from 'src/app/Services/jardin.service';
@Component({
  selector: 'app-update-jardin',
  templateUrl: './update-jardin.component.html',
  styleUrls: ['./update-jardin.component.css']
})
export class UpdateJardinComponent implements OnInit {

  jardin_id: number;
  jardin: Jardin;

  constructor(private route: ActivatedRoute,private router: Router,
    private jardinService: JardinService) { }

  ngOnInit() {
    this.jardin = new Jardin();

    this.jardin_id = this.route.snapshot.params['jardin_id'];
    
    this.jardinService.retrieveJardin(this.jardin_id)
      .subscribe(data => {
        console.log(data)
        this.jardin = data;
      }, error => console.log(error));
  }

  modifyJardin() {
    this.jardinService.updateJardin(this.jardin_id, this.jardin)
      .subscribe(data => {
        console.log(data);
        this.jardin = new Jardin();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.modifyJardin();
    this.onSubmit();


  }

  gotoList() {
    this.router.navigate(['/jardins']);
  }
}
