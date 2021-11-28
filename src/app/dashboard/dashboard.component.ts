import { Component, OnInit } from '@angular/core';
import QrcodeDecoder from 'qrcode-decoder';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  value: any;
  paramData: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    try {
      this.paramData = this.route.snapshot.queryParamMap.get('data');
      const qr = new QrcodeDecoder();
      console.log(this.paramData);
      if(this.paramData && this.paramData !== ''){
        qr.decodeFromImage(this.paramData)
          .then((result: any) => {
            console.log(result);
            this.value = JSON.stringify(result.data);
        });
      }
      
    } catch (error) {
      
    }
    

    
  }
  
  

}
