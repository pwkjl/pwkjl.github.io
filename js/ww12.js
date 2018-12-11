function question1(){
    var m1 = parseFloat(document.getElementById("q1.m1").value);
    var m2 = parseFloat(document.getElementById("q1.m2").value);
    var l = parseFloat(document.getElementById("q1.l").value);
    var d1 = parseFloat(document.getElementById("q1.d1").value);
    var d2 = parseFloat(document.getElementById("q1.d2").value);

    document.getElementById("q1.a").innerHTML = (l*l*(m1+m2))/4 + " kg * m^2";
    document.getElementById("q1.b").innerHTML = 0.5*m1*(d1/2)*(d1/2)+0.5*m2*(d2/2)*(d2/2) + " kg * m^2";
}

function question2(){
    var m1 = parseFloat(document.getElementById("q2.m1").value);
    var m2 = parseFloat(document.getElementById("q2.m2").value);
    var r = parseFloat(document.getElementById("q2.r").value)/100;
    var h = parseFloat(document.getElementById("q2.h").value);

    document.getElementById("q2.a").innerHTML = m1*9.8/(m1+m2/2) + " m/s^2";
    document.getElementById("q2.b").innerHTML = m1*m2*9.8/(2*m1+m2) + " N";
    document.getElementById("q2.c").innerHTML = (r/100)*Math.sqrt(4*9.8*m1*(h/100)/(r*r*(m2+2*m1)/10000))+ " m/s";
}

function question3(){
    var f = parseFloat(document.getElementById("q3.f").value);
    var mass = parseFloat(document.getElementById("q3.m").value);
    var r = parseFloat(document.getElementById("q3.r").value);
    var t = parseFloat(document.getElementById("q3.t").value);
    var t2 = parseFloat(document.getElementById("q3.t2").value);
    var r2 = parseFloat(document.getElementById("q3.r2").value)/100;
    var t3 = parseFloat(document.getElementById("q3.t3").value);

    var torque = f*r;
    var inertia = mass*r*r;
    var a = torque/inertia;

    document.getElementById("q3.a").innerHTML = a + " rad/s^2";
    document.getElementById("q3.b").innerHTML = a*(t*t2-0.5*t*t)/(2*Math.PI) + " revolutions";
    document.getElementById("q3.c").innerHTML = inertia*(a*t/t3)/(r2) + " N";
}