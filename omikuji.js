 function kuji() {
 var kuji = ["1","2","3","4","5"];
 var c = kuji[Math.floor(Math.random()*kuji.length)];

 if (c==1){
 document.getElementById('kuji').src ="./omikuji/omikuji_daikichi.png";
 }
  else if (c==2){
  document.getElementById('kuji').src ="./omikuji/omikuji_chuukichi.png";
  }
   else if (c==3){
   document.getElementById('kuji').src ="./omikuji/omikuji_kichi.png";
   }
    else if (c==4){
    document.getElementById('kuji').src ="./omikuji/omikuji_suekichi.png";
    }
     else if (c==5){
     document.getElementById('kuji').src ="./omikuji/omikuji_syoukichi.png";
     }
}