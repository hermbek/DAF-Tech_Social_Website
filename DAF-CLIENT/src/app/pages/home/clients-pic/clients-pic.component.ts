import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-clients-pic',
  templateUrl: './clients-pic.component.html',
  styleUrls: ['./clients-pic.component.css']
})
export class ClientsPicComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    autoWidth: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  clients: any
  constructor(private homeService: HomeService, private commonService: CommonService) { }
  ngOnInit(): void {

    this.homeService.getClients().subscribe({
      next: (res) => {

        this.clients = res.data
        console.log(res.data)


      }, error: (err) => {
        console.log(err)
      }
    })

  }


  getImagePath(image: any) {


    return this.commonService.createImagePath(image.data.attributes.url)
  }

}
