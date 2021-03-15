import { Component, OnInit } from '@angular/core';

@Component ({
    selector:'app-slaider-third',
    templateUrl:'./slaider-third.component.html',
    styleUrls:['./slaider-third.component.scss']
})

export class SlaiderThirdComponent implements OnInit {
    ngOnInit(){
        for(let i = 0; i < this.allImg.length; i++){
          if(i !== this.activeImg){
            this.allImg[i].classList.add('hide-img-city');
            this.allImg[i].nextElementSibling.classList.add('hide-img-text');
          }
        }
        this.allImg[this.activeImg].classList.add('show-img-nature');
        this.allImg[this.activeImg].nextElementSibling.classList.add('show-img-text');
      }
      activeImg:number = 0;
      allImg = document.getElementsByClassName('img-slaider-city');
      nextImg():void{
        this.activeImg++;
        if(this.activeImg > this.allImg.length - 1){
          this.activeImg = 0;
        }
        for(let i = 0; i < this.allImg.length; i++){
          if(i !== this.activeImg){
            this.allImg[i].classList.remove('show-img-city');
            this.allImg[i].classList.add('hide-img-city');
            this.allImg[this.activeImg].nextElementSibling.classList.remove('show-img-text');
            this.allImg[i].nextElementSibling.classList.add('hide-img-text');
          }
        }
        this.allImg[this.activeImg].classList.remove('hide-img-city');
        this.allImg[this.activeImg].classList.add('show-img-city');
        this.allImg[this.activeImg].nextElementSibling.classList.remove('hide-img-text');
        this.allImg[this.activeImg].nextElementSibling.classList.add('show-img-text');
      }
      prevImg():void{
        this.activeImg--;
        if(this.activeImg < 0){
          this.activeImg = this.allImg.length - 1;
        }
          for(let i = 0; i < this.allImg.length; i++){
            if(i !== this.activeImg){
              this.allImg[i].classList.remove('show-img-city');
              this.allImg[i].classList.add('hide-img-city');
              this.allImg[this.activeImg].nextElementSibling.classList.remove('show-img-text');
              this.allImg[i].nextElementSibling.classList.add('hide-img-text');
            }
          }
          this.allImg[this.activeImg].classList.remove('hide-img-city');
          this.allImg[this.activeImg].classList.add('show-img-city');
          this.allImg[this.activeImg].nextElementSibling.classList.remove('hide-img-text');
          this.allImg[this.activeImg].nextElementSibling.classList.add('show-img-text');
        }
}