import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-clients-pic',
  templateUrl: './clients-pic.component.html',
  styleUrls: ['./clients-pic.component.css']
})
export class ClientsPicComponent implements OnInit {

  clients: any
  constructor(private homeService: HomeService,private commonService:CommonService) { }
  ngOnInit(): void {

    this.homeService.getClients().subscribe({
      next: (res) => {

        this.clients = res.data
       

      }, error: (err) => {
        console.log(err)
      }
    })

  }


  getImagePath(image:any){
    

    return this.commonService.createImagePath(image.data.attributes.url)
  }

}
