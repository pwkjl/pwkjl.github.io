function question1(){}

function question2(){
    var pmass = parseFloat(document.getElementById("q2.pmass").value);
    var pspeed = parseFloat(document.getElementById("q2.pspeed").value);
    var pradius = parseFloat(document.getElementById("q2.pradius").value);
    var cmass = parseFloat(document.getElementById("q2.cmass").value);
    var cspeed = parseFloat(document.getElementById("q2.cspeed").value);
    var cradius = parseFloat(document.getElementById("q2.cradius").value);
    var tmass = parseFloat(document.getElementById("q2.tmass").value);
    var tspeed = parseFloat(document.getElementById("q2.tspeed").value);
    var tradius = parseFloat(document.getElementById("q2.tradius").value);

    document.getElementById("q2.pforce").innerHTML = (pmass*pspeed*pspeed)/pradius + " N Tension";
    document.getElementById("q2.cforce").innerHTML = (cmass*cspeed*cspeed)/cradius + " N Static Friction";
    document.getElementById("q2.tforce").innerHTML = (tmass*tspeed*tspeed)/tradius  + " N Normal Force and Weight";
}

function question3(){
    var mass = parseFloat(document.getElementById("q3.mass").value);
    var radius = parseFloat(document.getElementById("q3.radius").value);
    var speed = parseFloat(document.getElementById("q3.speed").value);

    document.getElementById("q3.force").innerHTML = ((mass*speed*speed)/radius)/4 + " N";
    document.getElementById("q3.cf").innerHTML = ((mass*speed*speed)/radius)/(mass*9.8);
}

function question4(){
    var mass = parseFloat(document.getElementById("q4.mass").value);
    var radius = parseFloat(document.getElementById("q4.radius").value);
    var speed = parseFloat(document.getElementById("q4.speed").value);

    var accel = (speed*speed)/radius

    document.getElementById("q4.topforce").innerHTML = mass * (accel - 9.8) + " N";
    document.getElementById("q4.bottomforce").innerHTML = mass * (accel + 9.8) + " N" ;

}

function question5(){
    var radius = parseFloat(document.getElementById("q5.radius").value);

    document.getElementById("q5.speed").innerHTML = Math.sqrt((9.8 * radius)) + " m/s";
}

function question6(){
    var mass1 = parseFloat(document.getElementById("q6.mass1").value);
    var radius = parseFloat(document.getElementById("q6.radius").value);
    var mass2 = parseFloat(document.getElementById("q6.mass2").value);

    document.getElementById("q6.speed").innerHTML = Math.sqrt((((9.8*mass2)*radius)/mass1)) + " m/s";
}

function question7(){
    var mass = parseFloat(document.getElementById("q7.mass").value);
    var length = parseFloat(document.getElementById("q7.length").value)/100;
    var angle = parseFloat(document.getElementById("q7.angle").value) * (Math.PI / 180);

    var t = (9.8*mass)/Math.cos(angle);
    var rad = Math.sin(angle)*length;
    var circ = 2 * Math.PI * rad;

    document.getElementById("q7.time").innerHTML = circ/Math.sqrt(((t*Math.sin(angle)) * rad)/mass) + " s";
    document.getElementById("q7.tension").innerHTML = t + " N";
}

function question8(){
    var mass = parseFloat(document.getElementById("q8.mass").value);
    var length = parseFloat(document.getElementById("q8.length").value);
    var maxtension = parseFloat(document.getElementById("q8.maxtension").value);
    var ospeed = parseFloat(document.getElementById("q8.speed").value);

    var speed = Math.sqrt((maxtension*length)/mass)

    document.getElementById("q8.maxspeed").innerHTML = speed + " m/s";
    document.getElementById("q8.toptension").innerHTML = ((mass*ospeed*ospeed)/length)-9.8*mass + " N";
}

function question9(){
    var mass = parseFloat(document.getElementById("q9.mass").value);
    var radius = parseFloat(document.getElementById("q9.radius").value);
    var topnormal = parseFloat(document.getElementById("q9.topnormal").value);

    var v = Math.sqrt(((topnormal/mass)+9.8)*radius);

    document.getElementById("q9.topspeed").innerHTML = v + " m/s";
    document.getElementById("q9.bottomnormal").innerHTML = mass*(((v*v)/radius)+9.8) + " N";

}

function question10(){
    var mass = parseFloat(document.getElementById("q10.mass").value);
    var length = parseFloat(document.getElementById("q10.length").value);
    var distance = parseFloat(document.getElementById("q10.distance").value);
    var tension1 = parseFloat(document.getElementById("q10.tension1").value);

    var sint = (distance/2)/length;
    var radius = Math.sqrt((length*length)-((distance/2)*(distance/2)));
    var cost = radius/length;

    var tension2 = tension1 - (mass * 9.8)/(sint);

    document.getElementById("q10.tension2").innerHTML = tension2 + " N";
    document.getElementById("q10.revpermin").innerHTML = Math.sqrt((tension1*cost+tension2*cost)/(4*mass*radius*Math.PI*Math.PI)) * 60 + " rev/min";
    document.getElementById("q10.revpermin2").innerHTML = Math.sqrt((((mass*9.8)/sint)*cost)/(4*mass*radius*Math.PI*Math.PI)) * 60 + " rev/min";
}

function question11(){
    var radius = parseFloat(document.getElementById("q11.radius").value);
    var angle = parseFloat(document.getElementById("q11.angle").value) * (Math.PI / 180);

    document.getElementById("q11.speed").innerHTML = Math.sqrt(9.8*Math.tan(angle)*radius) + " m/s";
}

function question12(){
    var speed = parseFloat(document.getElementById("q12.speed").value);
    var time = parseFloat(document.getElementById("q12.time").value);
    var angle = parseFloat(document.getElementById("q12.angle").value) * (Math.PI / 180);

    var a = speed/time;

    var i = a - a*Math.cos(angle);
    var j = -a*Math.sin(angle);

    document.getElementById("q12.accel").innerHTML = Math.sqrt(i*i+j*j) + " m/s^2";
}