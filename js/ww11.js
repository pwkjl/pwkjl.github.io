function question1(){
}

function question2(){
    var m = parseFloat(document.getElementById("q2.m").value);
    var vi = parseFloat(document.getElementById("q2.vi").value);
    var vx = parseFloat(document.getElementById("q2.vx").value);
    var vy = parseFloat(document.getElementById("q2.vy").value);

    document.getElementById("q2.a").innerHTML = 2*vi-vx + " i";
    document.getElementById("q2.b").innerHTML = Math.abs(vy) + " j m/s";
}

function question3(){
    var m1 = parseFloat(document.getElementById("q3.m1").value);
    var m2 = parseFloat(document.getElementById("q3.m2").value);
    var angle1 = parseFloat(document.getElementById("q3.a1").value) * (Math.PI / 180);
    var vel = parseFloat(document.getElementById("q3.vel").value);
    var angle2 = parseFloat(document.getElementById("q3.a2").value) * (Math.PI / 180);
    var time = parseFloat(document.getElementById("q3.time").value);

    var vf = ((m2*Math.sin(angle2))/(m1*Math.sin(angle1)))*vel;
    var vi = vf * Math.cos(angle1)+(m2/m1)*Math.cos(angle2)*vel;
    var vfx = vf * Math.cos(angle1);
    var vfy = (vel*m2*Math.sin(angle2));

    var Jx = m1 * (vfx - vi);
    var Jy = m2 * vel*Math.sin(angle2);
    var Fx = Jx / (time/1000);
    var Fy = Jy / (time/1000);

    document.getElementById("q3.a").innerHTML = "a) " + vi + " i + " + 0 + " j m/s";
    document.getElementById("q3.b").innerHTML = "b) " + vfx + " i + " + vfy/m1 + " j m/s";
    document.getElementById("q3.c").innerHTML = "c) " + Jx + " i + " + Jy + " j Ns";
    document.getElementById("q3.d").innerHTML = "d) " + Fx + " i + " + Fy + " j N";
    document.getElementById("q3.e").innerHTML = "e) " + -Fx + " i + " + -Fy + " j N";
    document.getElementById("q3.f").innerHTML = "f) " + -Jx + " i + " + -Jy + " j Ns";
}

function question4(){
    var m = parseFloat(document.getElementById("q3.m").value);
    var v = parseFloat(document.getElementById("q3.v").value);
    var angle = parseFloat(document.getElementById("q3.angle").value) * (Math.PI / 180);

    
}

function question5(){
    var mi = parseFloat(document.getElementById("q5.mi").value);
    var vi = parseFloat(document.getElementById("q5.vi").value);
    var m1 = parseFloat(document.getElementById("q5.m1").value);
    var v1 = parseFloat(document.getElementById("q5.v1").value);
    var m2 = parseFloat(document.getElementById("q5.m2").value);
    var v2 = parseFloat(document.getElementById("q5.v2").value);

    var v3 = Math.sqrt((vi*mi+v2*m2)*(vi*mi+v2*m2)+(v1*m1)*(v1*m1))/(mi-m1-m2);

    document.getElementById("q5.a").innerHTML = v3 + " m/s";
    document.getElementById("q5.b").innerHTML = (0.5*m1*v1*v1)+(0.5*m2*v2*v2)+(0.5*(mi-m1-m2)*v3*v3)-0.5*mi*vi*vi + " J";
}

function question6(){
    
}

function question7(){
    var m1 = parseFloat(document.getElementById("q3.m1").value);
    var m2 = parseFloat(document.getElementById("q3.m2").value);
    var angle1 = parseFloat(document.getElementById("q3.a1").value) * (Math.PI / 180);
    var vel = parseFloat(document.getElementById("q3.vel").value);
    var angle2 = parseFloat(document.getElementById("q3.a2").value) * (Math.PI / 180);
    var time = parseFloat(document.getElementById("q3.time").value);

    var vf = ((m2*Math.sin(angle2))/(m1*Math.sin(angle1)))*vel;
    var vi = vf * Math.cos(angle1)+(m2/m1)*Math.cos(angle2)*vel;
    var vfx = vf * Math.cos(angle1);
    var vfy = (vel*m2*Math.sin(angle2));

    var Jx = m1 * (vfx - vi);
    var Jy = m2 * vel*Math.sin(angle2);
    var Fx = Jx / (time/1000);
    var Fy = Jy / (time/1000);

    document.getElementById("q3.a").innerHTML = "a) " + vi + " i + " + 0 + " j m/s";
    document.getElementById("q3.b").innerHTML = "b) " + vfx + " i + " + vfy/m1 + " j m/s";
    document.getElementById("q3.c").innerHTML = "c) " + Jx + " i + " + Jy + " j Ns";
    document.getElementById("q3.d").innerHTML = "d) " + Fx + " i + " + Fy + " j N";
    document.getElementById("q3.e").innerHTML = "e) " + -Fx + " i + " + -Fy + " j N";
    document.getElementById("q3.f").innerHTML = "f) " + -Jx + " i + " + -Jy + " j Ns";
}
