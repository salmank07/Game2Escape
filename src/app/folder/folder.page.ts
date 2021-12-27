import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.slidedata    
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  slideOpt = {
    slidesPerView: 1.5,
    spaceBetween: 10
  }
  slideOpt1 = {
    slidesPerView: 3.5,
    spaceBetween: 10
  }
  slideOpt2 = {
    slidesPerView: 2.5,
    spaceBetween: 10
  }


  
  slidedata = [
    { title: "gamename1", url: "/assets/images/bg3.jpg" },
    { title: "gamename1", url: "/assets/images/bg3.jpg" },
    { title: "gamename1", url: "/assets/images/bg3.jpg" },
    { title: "gamename1", url: "/assets/images/bg3.jpg" },
    { title: "gamename1", url: "/assets/images/bg3.jpg" }
  ];

}
