function question1(){
    var mass = parseFloat(document.getElementById("q1.mass").value);
    var length = parseFloat(document.getElementById("q1.length").value);
    var angle = parseFloat(document.getElementById("q1.angle").value)* (Math.PI / 180);
    var force = parseFloat(document.getElementById("q1.force").value);
    var friction = parseFloat(document.getElementById("q1.frictionforce").value);

    document.getElementById("q1.workperson").innerHTML = force * length + " J";
    document.getElementById("q1.workgravity").innerHTML = -1 * mass * 9.8 * Math.sin(angle) * length + " J";
    document.getElementById("q1.workfriction").innerHTML = -1 * friction * length + " J";
}

function question2(){
    var mass = parseFloat(document.getElementById("q2.mass").value);
    var ckf = parseFloat(document.getElementById("q2.ckf").value);
    var displacement = parseFloat(document.getElementById("q2.displacement").value);
    var angle = parseFloat(document.getElementById("q2.angle").value)* (Math.PI / 180);

    var f = (mass * 9.8 * ckf)/(Math.cos(angle)-Math.sin(angle)*ckf);

    document.getElementById("q2.wforce").innerHTML = f * displacement * Math.cos(angle) + " J";
    document.getElementById("q2.wfriction").innerHTML = -f * displacement * Math.cos(angle) + " J";
    document.getElementById("q2.wgravity").innerHTML = 0 + " J";
}

function question3(){
    var mass = parseFloat(document.getElementById("q3.mass").value);
    var i1 = parseFloat(document.getElementById("q3.i1").value);
    var j1 = parseFloat(document.getElementById("q3.j1").value);
    var i2= parseFloat(document.getElementById("q3.i2").value);
    var j2 = parseFloat(document.getElementById("q3.j2").value);

    var k1 = Math.sqrt(i1*i1+j1*j1);
    var k2 = Math.sqrt(i2*i2+j2*j2);

    document.getElementById("q3.deltake").innerHTML = ((0.5*mass*k2*k2)-(0.5*mass*k1*k1)) + " J";
}

function question4(){
    var mass = parseFloat(document.getElementById("q4.mass").value);
    var speed = parseFloat(document.getElementById("q4.speed").value);
    var distance = parseFloat(document.getElementById("q4.distance").value);

    var s = speed * (1000/(60*60));

    document.getElementById("q4.wstop").innerHTML = (0.5*mass*s*s) + " J";
    document.getElementById("q4.fstop").innerHTML = (0.5*mass*s*s)/(distance*1000) + " N" ;
    document.getElementById("q4.fspeed").innerHTML = Math.sqrt(((0.5*mass*s*s)/2)/(0.5*mass)) * ((60*60)/1000) + " m/s" ;
}

function question5(){
    var emass = parseFloat(document.getElementById("q5.emass").value);
    var cmass = parseFloat(document.getElementById("q5.cmass").value);
    var speed = parseFloat(document.getElementById("q5.speed").value);

    document.getElementById("q5.power").innerHTML = ((emass-cmass)*9.8*speed) + " W";
}

function question6(){
    var mass = parseFloat(document.getElementById("q6.mass").value);
    var angle = parseFloat(document.getElementById("q6.angle").value)* (Math.PI / 180);
    var speed = parseFloat(document.getElementById("q6.speed").value);
    var ckf = parseFloat(document.getElementById("q6.ckf").value);

    var weight = mass * 9.8;

    document.getElementById("q6.power").innerHTML = ((weight*Math.sin(angle)+weight*Math.cos(angle)*ckf)*speed) + " W";
}

function question7(){
    var mass = parseFloat(document.getElementById("q7.mass").value);
    var ckf = parseFloat(document.getElementById("q7.ckf").value);
    var distance = parseFloat(document.getElementById("q7.distance").value);

    var w = mass*9.8*ckf*distance;

    document.getElementById("q7.wfriction").innerHTML = -w + " J";
    document.getElementById("q7.wpush").innerHTML = w + " J";
    document.getElementById("q7.wgravity").innerHTML = 0 + " J";
    document.getElementById("q7.wnormal").innerHTML = 0 + " J";
    document.getElementById("q7.wnet").innerHTML = 0 + " J";

}

function question8(){
    var mass = parseFloat(document.getElementById("q8.mass").value);
    var speed = parseFloat(document.getElementById("q8.speed").value);
    var distance = parseFloat(document.getElementById("q8.distance").value);

    document.getElementById("q8.ff").innerHTML = ((0.5*mass*speed*speed)/distance) + " N";
}

function question9(){
    var mass = parseFloat(document.getElementById("q9.mass").value);
    var speed = parseFloat(document.getElementById("q9.speed").value);
    var distance = parseFloat(document.getElementById("q9.distance").value);

    var w = 0.5*mass*speed*speed;

    document.getElementById("q9.wbow").innerHTML = w + " J";
    document.getElementById("q9.force").innerHTML = (w/distance) + " N";

}

function question10(){
}