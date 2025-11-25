import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App
{
      selectedFood:string='';
      foodName:string = '';
      foodDescription:string = '';
      imgUrl:string = '';
      imgAlt:string = '';

      updateFoodDetails()
      {
      if(this.selectedFood==="idly")
      {
        this.foodName = "Idly";
        this.foodDescription = "Idly is good for health";
        this.imgUrl = "https://t3.ftcdn.net/jpg/03/62/02/26/360_F_362022640_fZ6UM0JycJlFDdBiR1pYlNddKfdGvYwR.jpg";
        this.imgAlt = "Idly Image";
      }
      else if(this.selectedFood==="dosa")
      {
        this.foodName = "Dosa";
        this.foodDescription = "Dosa is good for health";
        this.imgUrl = "https://t3.ftcdn.net/jpg/01/86/33/72/360_F_186337209_9rbcMLu3wGCDNaEoK1jO0aNzb0pv7Xs7.jpg";
        this.imgAlt = "Dosa Image";

      }
      else if(this.selectedFood==="poori")
      {
        this.foodName = "Poori";
        this.foodDescription = "Poori is good for health";
        this.imgUrl = "https://t4.ftcdn.net/jpg/05/08/30/57/360_F_508305770_a9qcz90K0OAhneSr3WlMruDxVOiKwswC.jpg";
        this.imgAlt = "Poori Image";

      }
      else if(this.selectedFood==="pongal")
      {
        this.foodName = "Pongal";
        this.foodDescription = "Pongal is good for health";
        this.imgUrl = "https://t3.ftcdn.net/jpg/02/80/40/82/360_F_280408297_Uk3dj7jDZRCD0soa0yoMb8CvDpP3ajOv.jpg";
        this.imgAlt = "Pongal Image";

      }
      else if(this.selectedFood==="upma")
      {
        this.foodName = "upma";
        this.foodDescription = "upma is good for health";
        this.imgUrl = "https://t3.ftcdn.net/jpg/02/16/69/88/360_F_216698845_uhpzt1stNfO4IHb9Xj3LcrKoqm5liGvS.jpg";
        this.imgAlt = "upma Image";

      }
      else if(this.selectedFood==='selectitem')
      {
        this.foodName = "Order something";
        this.foodDescription="Enjoy your food";
        this.imgUrl="https://i.pinimg.com/564x/60/a9/b1/60a9b19aebfe71a4649d14fbd5a07f00.jpg";
      }

     }
      // foodName:string = "Dosai";
      // foodDescription:string = "Dosai is good for health";
      // imgUrl:string = "";
      // imgAlt:string = "Dosai image";
  
      // foodName:string = "Pongal";
      // foodDescription:string = "Pongal is good for health";
      // imgUrl:string = "";
      // imgAlt:string = "Pongal image";
  
      // foodName:string = "Parotta";
      // foodDescription:string = "Parotta is good for health";
      // imgUrl:string = "";
      // imgAlt:string = "Parotta image";
  


}
