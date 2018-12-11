function question1(){
    var mass1 = parseFloat(document.getElementById("q1.mass1").value);
    var mass2 = parseFloat(document.getElementById("q1.mass2").value);
    var length = parseFloat(document.getElementById("q1.length").value);

    document.getElementById("q1.sitlength").innerHTML = (mass1*9.8*(length/2))/(mass2*9.8) + " m";
}

function question2(){
    var benchlength = parseFloat(document.getElementById("q2.benchlength").value);
    var legslength = parseFloat(document.getElementById("q2.legslength").value);
    var plankmass = parseFloat(document.getElementById("q2.plankmass").value);
    var boxmass = parseFloat(document.getElementById("q2.boxmass").value);
    var boxlength = parseFloat(document.getElementById("q2.boxlength").value);

    var rn = (plankmass*9.8*(benchlength/2-legslength)+(boxmass*9.8*(benchlength-boxlength-legslength)))/(benchlength-legslength*2)

    document.getElementById("q2.leftnormal").innerHTML = (boxmass+plankmass)*9.8-rn + " N";
    document.getElementById("q2.rightnormal").innerHTML = rn + " N";
}

function question3(){
    var plen = parseFloat(document.getElementById("q3.plen").value);
    var lbal = parseFloat(document.getElementById("q3.lbal").value);
    var rbal = parseFloat(document.getElementById("q3.rbal").value);

    document.getElementById("q3.pmass").innerHTML = (lbal+rbal)/9.8 + " kg";
    document.getElementById("q3.lhdist").innerHTML = "I don't know how to calculate this. (Should be a bit greater than " + plen/2 + ")";
}

function question4(){
    var bmass = parseFloat(document.getElementById("q4.bmass").value)/1000;
    var alen = parseFloat(document.getElementById("q4.alen").value)/100;
    var angle = parseFloat(document.getElementById("q4.angle").value) * (Math.PI / 180);
    var l2 = parseFloat(document.getElementById("q4.l2").value)/100;
    var amass = parseFloat(document.getElementById("q4.amass").value);
    var cdist = parseFloat(document.getElementById("q4.cdist").value)/100;

    var f = (9.8*bmass*alen + 9.8*amass*cdist)/(Math.sin(angle)*l2)

    document.getElementById("q4.dmforce").innerHTML = f + " N";
    document.getElementById("q4.fh").innerHTML = f*Math.cos(angle) + " N" ;
    document.getElementById("q4.fv").innerHTML = 9.8*(amass+bmass)-(f*Math.sin(angle)) + " N (+ or -)" ;

}

function question5(){
    var bmass = parseFloat(document.getElementById("q5.bmass").value);
    var blen = parseFloat(document.getElementById("q5.blen").value);
    var mtension = parseFloat(document.getElementById("q5.mtension").value);
    var angle = parseFloat(document.getElementById("q5.angle").value)  * (Math.PI / 180);
    var clen = parseFloat(document.getElementById("q5.clen").value);

    var f = (mtension*clen-bmass*9.8*Math.sin(angle+(Math.PI/2))*2*(blen-clen))/(blen*Math.sin((Math.PI/2)+angle))

    document.getElementById("q5.maxload").innerHTML = f + " N";
    document.getElementById("q5.fx").innerHTML = Math.abs(mtension*Math.cos(angle+(Math.PI/2))) + " N";
    document.getElementById("q5.fy").innerHTML = f+9.8*bmass-mtension*Math.sin(angle+(Math.PI/2)) + " N";
}

function question6(){
    var mass1 = parseFloat(document.getElementById("q6.mass1").value);
    var angle1 = parseFloat(document.getElementById("q6.angle1").value)* (Math.PI / 180);
    var angle2 = parseFloat(document.getElementById("q6.angle2").value)* (Math.PI / 180);
    var mass2 = parseFloat(document.getElementById("q6.mass2").value);

    var f = Math.abs((mass1*9.8+mass2*(9.8/2))/(Math.sin(angle2)-Math.cos(angle2)*Math.tan(angle1)));

    document.getElementById("q6.tension").innerHTML = f + " N";
    document.getElementById("q6.fx").innerHTML = f*Math.cos(angle2) + " N";
    document.getElementById("q6.fy").innerHTML = (mass1+mass2)*9.8+f*Math.sin(angle2) + " N";
}

function question7(){
    var scaleb = parseFloat(document.getElementById("q7.scaleb").value);
    var d1 = parseFloat(document.getElementById("q7.d1").value);
    var d2 = parseFloat(document.getElementById("q7.d2").value);
    var d3 = parseFloat(document.getElementById("q7.d3").value);
    var x = parseFloat(document.getElementById("q7.x").value);
    var y = parseFloat(document.getElementById("q7.y").value);

    var a = (x*(d2+d3)+y*(d3))/(d1+d2+d3)

    document.getElementById("q7.scalea").innerHTML = a + " kg";
    document.getElementById("q7.z").innerHTML = a + scaleb - x - y + " kg";
}

function question8(){
    var lenl = parseFloat(document.getElementById("q8.lenl").value);
    var w1 = parseFloat(document.getElementById("q8.w1").value);
    var angle = parseFloat(document.getElementById("q8.angle").value)* (Math.PI / 180);
    var wm = parseFloat(document.getElementById("q8.wm").value);
    var maxtension = parseFloat(document.getElementById("q8.maxtension").value);

    var f = ((maxtension*Math.sin(angle)*lenl)-w1*(lenl/2))/wm

    document.getElementById("q8.maxd").innerHTML = f + " m";
    document.getElementById("q8.fx").innerHTML = maxtension*Math.cos(angle) + " N";
    document.getElementById("q8.fy").innerHTML = (wm+w1)-maxtension*Math.sin(angle) + " N";

}

function question9(){
    var f1 = parseFloat(document.getElementById("q9.f1").value);
    var angle = parseFloat(document.getElementById("q9.angle").value)* (Math.PI / 180);

    var fx = f1-f1*Math.sin(angle);
    var fy = f1*Math.cos(angle);

    var otherangle = Math.atan(fy/fx);

    document.getElementById("q9.f").innerHTML = fy/Math.sin(otherangle) + " N";
    document.getElementById("q9.otherangle").innerHTML = otherangle * (180/Math.PI);

}

function question10(){
    var ftotal = parseFloat(document.getElementById("q10.ftotal").value);
    var f1 = parseFloat(document.getElementById("q10.f1").value);
    var f2 = parseFloat(document.getElementById("q10.f2").value);
    var angle = parseFloat(document.getElementById("q10.angle").value)* (Math.PI / 180);

    var fx = f2 * Math.cos(angle);
    var fy = f1-(f2*Math.sin(angle))

    document.getElementById("q10.1").innerHTML = Math.sqrt(fx*fx+fy*fy) + " N";
    document.getElementById("q10.2").innerHTML = Math.atan(fy/fx) * (180/Math.PI);
    document.getElementById("q10.3").innerHTML = (ftotal*Math.sin(Math.atan(fy/fx))-fy)/Math.sin(Math.atan(fy/fx)) + " N";
}