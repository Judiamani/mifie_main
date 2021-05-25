import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monchamp',
  templateUrl: './monchamp.component.html',
  styleUrls: ['./monchamp.component.css']
})
export class MonchampComponent implements OnInit {

  guillaumeNery = 'https://img.buzzfeed.com/buzzfeed-static/static/2015-09/17/21/enhanced/webdr01/anigif_enhanced-19901-1442539193-2.gif';
  guillaumeNerySmallQR = 'ID:AngeRAphaelLouanne,ph:5.5,humidité:20%,Air:30%//trghzjjjjdt++#ä#80767i6543t5zujklkjdtaeAERRBB¬@³Ł{Æ¼S³³¬¼€{½¶';
  

  constructor(private router: Router) { }

  ngOnInit() {

    setTimeout(()=>{
      var myurl = `localhost:1998/`;
      this.router.navigateByUrl(myurl);
    },5000);
    
  }

}
