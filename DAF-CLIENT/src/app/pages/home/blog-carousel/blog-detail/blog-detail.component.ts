import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements  OnInit{

  blog:any
  blogId! : string 
  constructor(
    private homeService: HomeService,
    private route : ActivatedRoute,
    private commonService:CommonService){}

  ngOnInit(): void {
    
    this.blogId = this.route.snapshot.paramMap.get('id')!;
    this.getSingleBlog(this.blogId)
  }

  getSingleBlog(id:string){

    this.homeService.getSingleBlog(id).subscribe({
      next:(res)=>{

        this.blog = res.data
        console.log("AAAAAAAAAA", this.blog)
      },
      error:(err)=>{

      }
    })
  }

  getImagePath(image:any){
    

   
    return this.commonService.createImagePath(image.data.attributes.url)
  }

  

}
