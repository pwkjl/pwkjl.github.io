function question1(){
    
}

function question2(){
    var mass = parseFloat(document.getElementById("q2.mass").value);
    var csf = parseFloat(document.getElementById("q2.csf").value);
    var ckf = parseFloat(document.getElementById("q2.ckf").value);
    var f1 = parseFloat(document.getElementById("q2.f1").value);
    var f2 = parseFloat(document.getElementById("q2.f2").value);
    var f3 = parseFloat(document.getElementById("q2.f3").value);
    var f4 = parseFloat(document.getElementById("q2.f4").value);

    var msf = mass * 9.8 * csf;
    var kf = mass * 9.8 * ckf;

    document.getElementById("q2.nf").innerHTML = mass * 9.8 + " N";
    document.getElementById("q2.msf").innerHTML = msf + " N";
    if(f1 > msf) document.getElementById("q2.friction1").innerHTML = kf + " N";
    else document.getElementById("q2.friction1").innerHTML = f1 + " N";
    if(f2 > msf) document.getElementById("q2.friction2").innerHTML = kf + " N";
    else document.getElementById("q2.friction2").innerHTML = f2 + " N";
    if(f3 > msf) document.getElementById("q2.friction3").innerHTML = kf + " N";
    else document.getElementById("q2.friction3").innerHTML = f3 + " N";
    if(f4 > msf) document.getElementById("q2.friction4").innerHTML = kf + " N";
    else document.getElementById("q2.friction4").innerHTML = f4 + " N";
}

function question3(){
    var mass = parseFloat(document.getElementById("q3.mass").value);
    var csf = parseFloat(document.getElementById("q3.csf").value);
    var ckf = parseFloat(document.getElementById("q3.ckf").value);
    var fangle = parseFloat(document.getElementById("q3.firstangle").value);
    var angle1 = parseFloat(document.getElementById("q3.angle1").value);
    var angle2 = parseFloat(document.getElementById("q3.angle2").value);
    var angle3 = parseFloat(document.getElementById("q3.angle3").value);
    var angle4 = parseFloat(document.getElementById("q3.angle4").value);

    var nf = mass * 9.8 * Math.cos((Math.PI / 180) * fangle);
    var msa = Math.atan(csf) * (180/Math.PI);

    document.getElementById("q3.nf").innerHTML = nf + " N";
    document.getElementById("q3.msf").innerHTML = nf * csf + " N";
    document.getElementById("q3.xcw").innerHTML = mass * 9.8 * Math.sin((Math.PI / 180) * fangle) + " N";
    document.getElementById("q3.angle").innerHTML = msa + " degrees";
    document.getElementById("q3.fsatangle").innerHTML = -mass * 9.8 * Math.sin((Math.PI / 180) * fangle) + " N"
    if(angle1 > msa) document.getElementById("q3.1f").innerHTML = -mass * 9.8 * Math.cos((Math.PI / 180) * angle4) * ckf + " N Kinetic";
    else document.getElementById("q3.1f").innerHTML = -mass * 9.8 * Math.sin((Math.PI / 180) * angle1) + " N Static";
    if(angle2 > msa) document.getElementById("q3.2f").innerHTML = -mass * 9.8 * Math.cos((Math.PI / 180) * angle2) * ckf + " N Kinetic";
    else document.getElementById("q3.2f").innerHTML = -mass * 9.8 * Math.sin((Math.PI / 180) * angle2) + " N Static";
    if(angle3 > msa) document.getElementById("q3.3f").innerHTML = -mass * 9.8 * Math.cos((Math.PI / 180) * angle3) * ckf + " N Kinetic";
    else document.getElementById("q3.3f").innerHTML = -mass * 9.8 * Math.sin((Math.PI / 180) * angle3) + " N Static";
    if(angle4 > msa) document.getElementById("q3.4f").innerHTML = -mass * 9.8 * Math.cos((Math.PI / 180) * angle4) * ckf + " N Kinetic";
    else document.getElementById("q3.4f").innerHTML = -mass * 9.8 * Math.sin((Math.PI / 180) * angle4) + " N Static";

}

function question4(){
    var mass1 = parseFloat(document.getElementById("q4.mass1").value);
    var mass2 = parseFloat(document.getElementById("q4.mass2").value);
    var angle = parseFloat(document.getElementById("q4.angle").value) * (Math.PI / 180);
    var ckf = parseFloat(document.getElementById("q4.ckf").value);

    var nf1 = mass1*9.8*Math.sin(angle);
    var nf2 = mass2*9.8;
    var kf = mass1*9.8*Math.cos(angle)*ckf;

    document.getElementById("q4.csf").innerHTML = (nf1-nf2)/(mass1*9.8*Math.cos(angle));
    document.getElementById("q4.uaccel").innerHTML = (nf1-nf2+kf)/(mass1+mass2) + " m/s^2";
    document.getElementById("q4.daccel").innerHTML = (nf1-nf2-kf)/(mass1+mass2) + " m/s^2";

}

function question5(){
    var mass = parseFloat(document.getElementById("q5.mass").value);
    var angle = parseFloat(document.getElementById("q5.angle").value) * (Math.PI / 180);
    var ckf1 = parseFloat(document.getElementById("q5.ckf1").value);
    var ckf2 = parseFloat(document.getElementById("q5.ckf2").value);

    var fx = mass * 9.8 * Math.sin(angle);
    var w = mass * 9.8 * Math.cos(angle);
    var f1 = w*ckf1;
    var f2 = w*ckf2;
 
    document.getElementById("q5.accel").innerHTML = (((f1-f2)/2)+fx-f1)/(mass) + " m/s^2";
    document.getElementById("q5.tension").innerHTML = (f1-f2)/2 + " N";
}

function question6(){
    var mass1 = parseFloat(document.getElementById("q6.mass1").value);
    var mass2 = parseFloat(document.getElementById("q6.mass2").value);
    var force = parseFloat(document.getElementById("q6.force").value);
    var angle = parseFloat(document.getElementById("q6.angle").value) * (Math.PI / 180);
    var ckf = parseFloat(document.getElementById("q6.ckf").value);

    var fx = force * Math.cos(angle) - (mass1*9.8-force*Math.sin(angle))*ckf;

    document.getElementById("q6.accel").innerHTML = (fx-mass2*9.8)/(mass1+mass2) + " m/s^2";

}

function question7(){
    var w = parseFloat(document.getElementById("q7.weight").value);
    var angle = parseFloat(document.getElementById("q7.angle").value) * (Math.PI / 180);
    var ckf = parseFloat(document.getElementById("q7.ckf").value);
    var csf = parseFloat(document.getElementById("q7.csf").value);

    document.getElementById("q7.mmts").innerHTML = w * Math.sin(angle) - csf * w * Math.cos(angle) + " N";
    document.getElementById("q7.mmtm").innerHTML = w * Math.sin(angle) + csf * w * Math.cos(angle) + " N";
    document.getElementById("q7.mfup").innerHTML = w * Math.sin(angle) + ckf * w * Math.cos(angle) + " N";
}

function question8(){
    var mass1 = parseFloat(document.getElementById("q8.mass1").value);
    var mass2 = parseFloat(document.getElementById("q8.mass2").value);
    var ckf1 = parseFloat(document.getElementById("q8.ckf1").value);
    var ckf2 = parseFloat(document.getElementById("q8.ckf2").value);
    var force = parseFloat(document.getElementById("q8.force").value);

    document.getElementById("q8.accel1").innerHTML = (force - mass1*9.8*ckf1)/(mass1) + " m/s^2";
    document.getElementById("q8.accel2").innerHTML = (mass1*9.8*ckf1 - (mass1+mass2)*9.8*ckf2)/(mass2) + " m/s^2";
}

function question9(){
    var mass1 = parseFloat(document.getElementById("q9.mass1").value);
    var mass2 = parseFloat(document.getElementById("q9.mass2").value);
    var csf = parseFloat(document.getElementById("q9.csf").value);

    document.getElementById("q9.force").innerHTML = (mass1*9.8)/(csf*(mass2/(mass1+mass2))) + " N";
}

function question10(){
    var n = parseInt(document.getElementById("q10.n").value);
    var mass1 = parseFloat(document.getElementById("q10.mass1").value);
    var mass2 = parseFloat(document.getElementById("q10.mass2").value);
    var angle = parseFloat(document.getElementById("q10.angle").value) * (Math.PI / 180);
    var ckf = parseFloat(document.getElementById("q10.ckf").value);
    var csf = parseFloat(document.getElementById("q10.csf").value);
    var mass3 = parseFloat(document.getElementById("q10.mass3").value);

    var accel = 0;
    
    var frict1 = 0;
    var frict2 = 0;
    var fk = mass1 * 9.8 * Math.cos(angle) * ckf;

    var ten1 = 0;
    var ten2 = 0;

    if(n == 1){
        ten1 = 9.8 * mass2
        //ten2 = (mass1)*accel + mass1 * 9.8 * Math.sin(angle) + fk
        ten2 = ((9.8*mass1*Math.sin(angle)*mass3-fk*mass3+9.8*mass3*mass3)/(mass3+mass1)).toString() + " N or " + ((9.8*mass3+9.8*mass1*Math.sin(angle)-fk)/2).toString()
        // ten 2 = (9.8*mass3+9.8*mass1*sind(angle)-fk)/2
        frict1 = ten1 - (9.8 * mass1 * Math.sin(angle))
        frict2 = fk
    }else{
        frict1 = mass1 * 9.8 * Math.cos(angle) * ckf
        //ten1 = (mass1) * accel + mass1 * 9.8 * Math.sin(angle) + frict1
        ten1 = ((9.8*mass2+9.8*mass1*Math.sin(angle)+frict1)/2).toString() + " N or "+ ((9.8*mass3+9.8*mass1*Math.sin(angle)-fk)/2).toString();
        ten2 = 9.8 * mass3
        frict2 = mass1 * 9.8 * Math.sin(angle)
    }

    document.getElementById("q10.friction1").innerHTML = Math.abs(frict1) + " N";
    document.getElementById("q10.tension1").innerHTML = ten1 + " N";
    document.getElementById("q10.friction2").innerHTML = Math.abs(frict2) + " N";
    document.getElementById("q10.tension2").innerHTML = ten2 + " N";
}

function question11(){
    var mass1 = parseFloat(document.getElementById("q11.mass1").value);
    var mass2 = parseFloat(document.getElementById("q11.mass2").value);

    document.getElementById("q11.accel1").innerHTML = "Mass 1 Acceleration = " + (mass2*9.8)/(mass1*2+mass2/2) + " m/s^2";
    document.getElementById("q11.accel2").innerHTML = "Mass 2 Acceleration = " + (mass2*9.8)/(mass1*4+mass2) + " m/s^2";
}