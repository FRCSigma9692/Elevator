function calculate_t2() {
    var t2a = document.getElementById("t2a").value*1;
    var t2b = document.getElementById("t2b").value*1;
    var t2e = document.getElementById("t2e").value*1;
    var t2c = t2a - 4;
    var t2d = t2a - 9;
    var t2f = t2a - 12;
    var t2x = document.getElementById("t2x").value*1;
    var t2g = t2x + 7 - t2b ;
    document.getElementById("t2c").innerHTML = t2c;
    document.getElementById("t2d").innerHTML = t2d;
    document.getElementById("t2f").innerHTML = t2f;
    document.getElementById("t2g").innerHTML = t2g;
    document.getElementById("t2maxext").innerHTML = t2x;
    document.getElementById("t2total").innerHTML = t2a + (2*t2b) + t2c + (2*t2d) + (2*t2e) + (2*t2f) + (2*t2g);
  }

  function calculate_ts(){
      var tsa = document.getElementById("tsa").value*1;
      var tsb = document.getElementById("tsb").value*1;
      document.getElementById("tsc").innerHTML = tsa-4;
      document.getElementById("tsd").innerHTML = tsa-9;
      document.getElementById("tsmaxext").innerHTML = (tsb * 2) - 7;
      document.getElementById("tstotal").innerHTML = (4 * tsb) + tsa + (tsa-4) + (2*(tsa-9));

  }

  function calculate_wcp1(){
    var wcp1B = document.getElementById("wcp1B").value*1;
    var wcp1C = document.getElementById("wcp1C").value*1;
    var wcp1a = document.getElementById("wcp1A").value*1;
    document.getElementById("wcp1D").innerHTML = wcp1B - 3;
    document.getElementById("wcp1Total").innerHTML = (2*wcp1a)  + (2*wcp1B) + (wcp1C*2) + (wcp1B-3)*2;
    document.getElementById("wcp1MaxExt").innerHTML = wcp1a;


  }

  function calculate_wcp2(){
    var wcp2a = document.getElementById("wcp2A").value*1;
    var wcp2x = document.getElementById("wcp2X").value*1;
    var wcp2e = document.getElementById("wcp2E").value*1;
    var wcp2c = document.getElementById("wcp2C").value*1;
    var wcp2b = wcp2a - 6;
    var wcp2d = wcp2x + 8 - wcp2e;
    var wcp2f = wcp2a - 5;
    document.getElementById("wcp2B").innerHTML = wcp2b;
    document.getElementById("wcp2D").innerHTML = wcp2d;
    document.getElementById("wcp2F").innerHTML = wcp2f;
    document.getElementById("wcp2MaxExt").innerHTML = wcp2x;
    document.getElementById("wcp2Total").innerHTML = (2*wcp2a) + (2*wcp2b) + (2*wcp2c) + (2*wcp2d) + (2*wcp2e) + (2*wcp2f);
    
  }

  function calculate_wcp3(){
    var wcp3a = document.getElementById("wcp3A").value*1;
    var wcp3x = document.getElementById("wcp3X").value*1;
    var wcp3b = document.getElementById("wcp3B").value*1;
    var wcp3f = document.getElementById("wcp3F").value*1;
    var wcp3c = document.getElementById("wcp3C").value*1;
    var wcp3d = wcp3x - wcp3b - wcp3c + 17; 
    var wcp3h = wcp3a - 5;
    var wcp3e = wcp3a - 10;
    var wcp3g = wcp3e + 1;
    var wcp3total = (2*wcp3a) + (2*wcp3b) + (2*wcp3c) + (2*wcp3d) + (2*wcp3e) + (2*wcp3f) +(2*wcp3g) + (2*wcp3h);
    document.getElementById("wcp3B").innerHTML = wcp3b;
    document.getElementById("wcp3D").innerHTML = wcp3d;
    document.getElementById("wcp3H").innerHTML = wcp3h;
    document.getElementById("wcp3E").innerHTML = wcp3g;
    document.getElementById("wcp3G").innerHTML = (wcp3a-10) + 1;
    document.getElementById("wcp3Total").innerHTML = wcp3total;
    document.getElementById("wcp3MaxExt").innerHTML = wcp3x;

  }



  function calculate_am1(){
    var am1a = document.getElementById("am1A").value*1;
    var am1c = document.getElementById("am1C").value*1;
    var am1d = document.getElementById("am1D").value*1;
    var am1b = am1c - 2.75;
    document.getElementById("am1B").innerHTML = am1b;
    document.getElementById("am1MaxExt").innerHTML = am1a;
    document.getElementById("am1Total").innerHTML = (2*am1a) + (2*am1b) + (2*am1c) + (2*am1d);
    
  }

  
  function calculate_am2(){
   var am2x = document.getElementById("am2X").value*1;
   var am2f = document.getElementById("am2F").value*1;
   var am2g = document.getElementById("am2G").value*1;
   var am2a = document.getElementById("am2A").value*1;
   var am2b = am2x - am2a - 1.5;
   var am2d = am2g - 2;
   var am2e = am2g - 4.75;
   var am2c = am2g + 2.75;
   document.getElementById("am2MaxExt").innerHTML = am2x;
   document.getElementById("am2Total").innerHTML = am2g + (2*am2a) + (2*am2b) + am2c + (2*am2d) + (2*am2e) + (am2f*2);


  }

  

  
  function showDimensions() { 
    const userPrompt = document.getElementById("userPrompt").value.toLowerCase();
    const tables = document.querySelectorAll(".table-container");
    tables.forEach(table => table.style.display = "none");

    if (userPrompt === "tssk") {
      document.getElementById("ts").style.display = "block";
    } 
    else if (userPrompt === "t2sk") {
      document.getElementById("t2").style.display = "block";
    } 
    else if (userPrompt === "wss") {
      document.getElementById("wcp1").style.display = "block";
    } 
    else if (userPrompt === "wds") {
      document.getElementById("wcp2").style.display = "block";
    }
    else if (userPrompt === "wts") {
      document.getElementById("wcp3").style.display = "block";
    }
    else if (userPrompt === "rse") {
      document.getElementById("rse").style.display = "block";
    }
    else if (userPrompt === "rme") {
      document.getElementById("rme").style.display = "block";
    }
    else if (userPrompt === "rce") {
      document.getElementById("rce").style.display = "block";
    }
    else if (userPrompt === "a1e") {
      document.getElementById("am1").style.display = "block";
    }
    else if (userPrompt === "a2e") {
      document.getElementById("am2").style.display = "block";
    }
  }


// Animation for logo fade
document.addEventListener("DOMContentLoaded", function() {
  const logoAnimation = document.getElementById("logo-animation");
  logoAnimation.addEventListener("animationend", () => {
      logoAnimation.style.display = "none";
  });
});

