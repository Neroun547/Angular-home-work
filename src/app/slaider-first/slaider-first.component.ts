import { Component } from '@angular/core';

@Component({
  selector: 'app-slaider-first',
  templateUrl: './slaider-first.component.html',
  styleUrls: ['./slaider-first.component.scss']
})
export class SlaiderFirstComponent {
  activeImg:number = 0;
  allImg:number = 5;
  nextImg():void{
    this.activeImg++;
    if(this.activeImg > this.allImg - 1){
      this.activeImg = 0;
    }
  }
  prevImg():void{
    this.activeImg--;
    if(this.activeImg < 0){
      this.activeImg = this.allImg - 1;
    }

  }
}
