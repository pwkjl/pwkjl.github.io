function question1(){
    var l = parseFloat(document.getElementById("q1.l").value)/100;
    var d = parseFloat(document.getElementById("q1.d").value)/100;

    var r = l - d;
    var ls = Math.sqrt(9.8*l*2);

    document.getElementById("q1.lowspeed").innerHTML = ls + " m/s";
    document.getElementById("q1.highspeed").innerHTML = Math.sqrt(((d-(l-d))*9.8)/0.5) + " m/s";
}

function question2(){
    var m = parseFloat(document.getElementById("q2.m").value);
    var l = parseFloat(document.getElementById("q2.l").value);
    var ckf = parseFloat(document.getElementById("q2.ckf").value);
    var h = parseFloat(document.getElementById("q2.h").value)/100;

    document.getElementById("q2.a").innerHTML = (m*9.8*h-l*9.8*m*ckf)/(m*9.8) + " m";
}

function question3(){
    var m = parseFloat(document.getElementById("q3.m").value)/1000;
    var k = parseFloat(document.getElementById("q3.k").value);
    var l = parseFloat(document.getElementById("q3.l").value);

    document.getElementById("q3.a").innerHTML = 9.8*m*l + " J";
    document.getElementById("q3.b").innerHTML = -0.5*k*l*l + " J";
    document.getElementById("q3.c").innerHTML = Math.sqrt((0.5*k*l*l-9.8*m*l)/(0.5*m)) + " m/s";
}

function question4(){
    var m = parseFloat(document.getElementById("q4.m").value);
    var h = parseFloat(document.getElementById("q4.h").value);
    var k = parseFloat(document.getElementById("q4.k").value);

    document.getElementById("q4.a").innerHTML = Math.sqrt(2*m*9.8*h/k) + " m";
    document.getElementById("q4.b").innerHTML = h + " m";
}

function question5(){
    var m = parseFloat(document.getElementById("q5.m").value);
    var d = parseFloat(document.getElementById("q5.d").value);
    var r = parseFloat(document.getElementById("q5.r").value);

    document.getElementById("q5.a").innerHTML = 9.8*m*d-9.8*m*r*2 + " J";
    document.getElementById("q5.b").innerHTML = ((9.8*m*d-9.8*m*r*2)/(0.5*m))/r + " m/s^2";
    document.getElementById("q5.c").innerHTML = 2.5 * r + " m";
}

function question6(){
    var m = parseFloat(document.getElementById("q6.m").value);
    var d = parseFloat(document.getElementById("q6.d").value);
    var k = parseFloat(document.getElementById("q6.k").value);

    document.getElementById("q6.a").innerHTML = Math.sqrt((m*9.8*d)/(0.5*k)) + " m";
}

function question7(){
    var m1 = parseFloat(document.getElementById("q7.m1").value);
    var k = parseFloat(document.getElementById("q7.k").value);
    var m2 = parseFloat(document.getElementById("q7.m2").value);
    var d = parseFloat(document.getElementById("q7.d").value)/100;

    document.getElementById("q7.a").innerHTML = 9.8*m2/(k*0.5) + " m";
    document.getElementById("q7.b").innerHTML = Math.sqrt((m2*9.8*d-0.5*k*d*d)/(0.5*m2+0.5*m1)) + " m/s";
}

function question8(){
    var m = parseFloat(document.getElementById("q8.m").value);
    var k = parseFloat(document.getElementById("q8.k").value);
    var d = parseFloat(document.getElementById("q8.d").value);
    var d2 = parseFloat(document.getElementById("q8.d2").value);

    document.getElementById("q8.a").innerHTML = (0.5*k*d*d)/(9.8*m*d2);
}

function question9(){
    var m = parseFloat(document.getElementById("q9.m").value);
    var angle = parseFloat(document.getElementById("q9.angle").value) * (Math.PI / 180);
    var d = parseFloat(document.getElementById("q9.d").value)/100;
    var k = parseFloat(document.getElementById("q9.k").value);

    document.getElementById("q9.a").innerHTML = (0.5*k*d*d-m*9.8*Math.sin(angle)*d)/(m*9.8*Math.sin(angle)) + " m";
    document.getElementById("q9.b").innerHTML = (9.8*m*Math.sin(angle))/k + " m";

}

function question10(){
    var m = parseFloat(document.getElementById("q10.m").value);
    var v = parseFloat(document.getElementById("q10.v").value);
    var ckf = parseFloat(document.getElementById("q10.ckf").value);
    var angle = parseFloat(document.getElementById("q10.angle").value) * (Math.PI / 180);

    var ke = (0.5*m*v*v)/(9.8*m*ckf);
    var ww = (m*9.8*Math.sin(angle));
    var wf = (m*9.8*Math.cos(angle)*ckf);

    document.getElementById("q10.a").innerHTML = ke + " m";
    document.getElementById("q10.b").innerHTML = (0.5*m*v*v)/(ww+wf) + " m";
    document.getElementById("q10.c").innerHTML = (0.5*m*v*v)/(wf-ww) + " m";

}

function question11(){
    var angle = parseFloat(document.getElementById("q11.angle").value) * (Math.PI / 180);
    var accel = parseFloat(document.getElementById("q11.accel").value);
    var t = parseFloat(document.getElementById("q11.t").value);

    var ax = accel * Math.cos(angle);
    var ay = accel * Math.sin(angle);

    var vyf = ay * t;
    var vxf = ax * t;

    var t2 = (-vyf-Math.sqrt(vyf*vyf-4*(-4.9)*(0.5*25*25*ay)))/(2*-4.9);

    document.getElementById("q11.a").innerHTML = t + t2 + " s";
    document.getElementById("q11.b").innerHTML = (vyf*vyf)/(2*9.8) + 0.5*ay*25*25 + " m";
    document.getElementById("q11.c").innerHTML = vxf * t2 + 0.5*ax*25*25 + " m";
}