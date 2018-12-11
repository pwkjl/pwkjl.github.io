function question1(){
    var mass = parseFloat(document.getElementById("q1.mass").value);
    var angle = parseFloat(document.getElementById("q1.angle").value);

    var accel = ((mass * 9.8)/Math.tan((90.0 - angle)*(Math.PI / 180)))/mass;

    document.getElementById("q1.acceleration").innerHTML = accel.toString() + " m/s^2";
    document.getElementById("q1.tension").innerHTML = ((parseFloat(mass) * 9.8)/Math.sin((90.0 - angle) * (Math.PI / 180))).toString() + " N";
}

function question2(){
    var mass1 = parseFloat(document.getElementById("q2.mass1").value);
    var mass2 = parseFloat(document.getElementById("q2.mass2").value);
    var angle = parseFloat(document.getElementById("q2.angle").value);

    document.getElementById("q2.blockten").innerHTML = (mass1 * 9.8 * Math.sin(angle * (Math.PI / 180))).toString() + " N";
    document.getElementById("q2.wallten").innerHTML = ((mass1 + mass2) * 9.8 * Math.sin(angle * (Math.PI / 180))).toString() + " N";

}

function question3(){
    var angle2 = parseFloat(document.getElementById("q3.angle1").value) * (Math.PI / 180);
    var angle1 = parseFloat(document.getElementById("q3.angle2").value) * (Math.PI / 180);
    var mass = parseFloat(document.getElementById("q3.mass").value);

    var t1 = (mass * 9.8)/(Math.sin(angle1) + (Math.cos(angle1)/Math.cos(angle2)) * Math.sin(angle2));

    document.getElementById("q3.tension").innerHTML = ((t1 * Math.cos(angle1))/Math.cos(angle2)).toString() + " N";
}

function question4(){
    var tmass = parseFloat(document.getElementById("q4.tmass").value);
    var daccel = parseFloat(document.getElementById("q4.daccel").value);
    var uaccel = parseFloat(document.getElementById("q4.uaccel").value);

    var uplift = tmass * 9.8 - tmass * daccel;
    var n = 9.8 + uaccel;

    document.getElementById("q4.mass").innerHTML = (-(uplift - tmass * n)/ (n)).toString() + " kg";
}

function question5(){
    var mass = parseFloat(document.getElementById("q5.mass").value);
    var force = parseFloat(document.getElementById("q5.force").value);
    var angle = parseFloat(document.getElementById("q5.angle").value) * (Math.PI / 180);
    var time = parseFloat(document.getElementById("q5.time").value);

    document.getElementById("q5.speed").innerHTML = (force * Math.cos(angle)/mass) * time + " m/s";
    document.getElementById("q5.magnitude").innerHTML = mass * 9.8 - force * Math.sin(angle) + " N";
}

function question6(){
    var force = parseFloat(document.getElementById("q6.force").value);
    var angle = parseFloat(document.getElementById("q6.angle").value) * (Math.PI / 180);

    document.getElementById("q6.mass").innerHTML = ((force/Math.sin(angle)) * Math.cos(angle)) / 9.8 + " kg";
    document.getElementById("q6.tension").innerHTML = force/Math.sin(angle) + " N";

}

function question7(){
    var mass1 = parseFloat(document.getElementById("q7.mass1").value);
    var mass2 = parseFloat(document.getElementById("q7.mass2").value);

    document.getElementById("q7.accel").innerHTML = (9.8 * mass1 * Math.sin(30 * (Math.PI / 180)) - 9.8 * mass2 * Math.sin(60 * (Math.PI / 180)))/(mass1 + mass2) + " m/s^2   <- Answer could be the negative/position version of this number.";
    document.getElementById("q7.tension").innerHTML = 9.8 * mass1 * Math.sin(30 * (Math.PI / 180)) - mass1 * (9.8 * mass1 * Math.sin(30 * (Math.PI / 180)) - 9.8 * mass2 * Math.sin(60 * (Math.PI / 180)))/(mass1 + mass2) + " N";
}

function question8(){
    var mass1 = parseFloat(document.getElementById("q8.mass1").value);
    var mass2 = parseFloat(document.getElementById("q8.mass2").value);
    var force = parseFloat(document.getElementById("q8.force").value);
    var ac = (force * Math.cos(20 * (Math.PI / 180)) - 9.8 * mass1 * Math.sin(30 * (Math.PI / 180)))/(mass1 + mass2);
    document.getElementById("q8.accel").innerHTML = ac + " m/s^2  <- Answer could be the negative/position version of this number.";
    document.getElementById("q8.tension").innerHTML = force * Math.cos(20 * (Math.PI / 180)) - 4.0 * ac + " N";
}

function question9(){
    var mass1 = parseFloat(document.getElementById("q9.mass1").value);
    var mass2 = parseFloat(document.getElementById("q9.mass2").value);
    var force = parseFloat(document.getElementById("q9.force").value);

    var ac = (9.8 * mass1 - force * Math.cos(18 * (Math.PI / 180)))/(mass1 + mass2);
    document.getElementById("q9.accel").innerHTML = ac + " m/s^2  <- Answer could be the negative/position version of this number.";
    document.getElementById("q9.tension").innerHTML = mass2 * ac + force * Math.cos(18 * (Math.PI / 180)) + " N";
}