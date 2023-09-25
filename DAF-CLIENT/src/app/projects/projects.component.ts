import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any
  constructor(private homeService: HomeService,private commonService:CommonService) { }
  ngOnInit(): void {

    this.homeService.getProjects().subscribe({
      next: (res) => {

        this.projects = res.data
  

      }, error: (err) => {
        console.log(err)
      }
    })

  }


  getImagePath(image:any){
    

    return this.commonService.createImagePath(image.data.attributes.url)
  }

}