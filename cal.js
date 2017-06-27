function onButtonClick() {
    "use strict";
    var a = parseFloat(document.frm1.A.value),
        b = parseFloat(document.frm1.B.value),
        c = parseFloat(document.frm1.C.value),
        d = parseFloat(document.frm1.D.value),
        e = a * 0.0125 * (1 + 0.0025 * b) * (0.0012 * c + 0.88),
        f1 = Math.floor(e * 1.21),
        f2 = Math.floor(e * 1.331),
        f3 = Math.floor(e * 1.3915),
        f4 = Math.floor(e * 1.452),
        f5 = Math.floor(e * 1.5125),
        f6 = Math.floor(e * 1.573);
    
    if (d <= 50) {
        var score1 = f1 * d;
    } else if (50 < d && d <= 100) {
        var score1 = f1 * 50 + f2 * (d - 50);
    } else if (100 < d && d <= 200) {
        var score1 = f1 * 50 + f2 * 50 + f3 * (d - 100);
    } else if (200 < d && d <= 400) {
        var score1 = f1 * 50 + f2 * 50 + f3 * 100 + f4 * (d - 200);
    } else if (400 < d && d <= 600) {
        var score1 = f1 * 50 + f2 * 50 + f3 * 100 + f4 * 200 + f5 * (d - 400);
    } else {
        var score1 = f1 * 50 + f2 * 50 + f3 * 100 + f4 * 200 + f5 * 200 + f6 * (d - 600);
    }
        
    var r1 = parseFloat(document.frm2.R1.value);
    var r2 = parseFloat(document.frm2.R2.value);
    var r3 = parseFloat(document.frm2.R3.value);
    if (document.frm2.R4.checked) {
        var r4 = 2.5;
    } else {
        var r4 = 1;
    }
        
    var s1 = parseFloat(document.frm2.S1.value);
    var s2 = parseFloat(document.frm2.S2.value);
    var s3 = parseFloat(document.frm2.S3.value);
    if (document.frm2.S4.checked) {
        var s4 = 2.5;
    } else {
        var s4 = 1;
    }
        
    var t1 = parseFloat(document.frm2.T1.value);
    var t2 = parseFloat(document.frm2.T2.value);
    var t3 = parseFloat(document.frm2.T3.value);
    if (document.frm2.T4.checked) {
        var t4 = 2.5;
    } else {
        var t4 = 1;
    }
        
    var u1 = parseFloat(document.frm2.U1.value);
    var u2 = parseFloat(document.frm2.U2.value);
    var u3 = parseFloat(document.frm2.U3.value);
    if (document.frm2.U4.checked) {
        var u4 = 2.5;
    } else {
        var u4 = 1;
    }
        
    var v1 = parseFloat(document.frm2.V1.value);
    var v2 = parseFloat(document.frm2.V2.value);
    var v3 = parseFloat(document.frm2.V3.value);
    if (document.frm2.V4.checked) {
        var v4 = 2.5;
    } else {
        var v4 = 1;
    }
        
    var w1 = parseFloat(document.frm2.W1.value);
    var w2 = parseFloat(document.frm2.W2.value);
    var w3 = parseFloat(document.frm2.W3.value);
    if (document.frm2.W4.checked) {
        var w4 = 2.5;
    } else {
        var w4 = 1;
    }
        
    var x1 = parseFloat(document.frm2.X1.value);
    var x2 = parseFloat(document.frm2.X2.value);
    var x3 = parseFloat(document.frm2.X3.value);
    if (document.frm2.X4.checked) {
        var x4 = 2.5;
    } else {
        var x4 = 1;
    }
        
    var y1 = parseFloat(document.frm2.Y1.value);
    var y2 = parseFloat(document.frm2.Y2.value);
    var y3 = parseFloat(document.frm2.Y3.value);
    if (document.frm2.Y4.checked) {
        var y4 = 2.5;
    } else {
        var y4 = 1;
    }
        
    var z1 = parseFloat(document.frm2.Z1.value);
    var z2 = parseFloat(document.frm2.Z2.value);
    var z3 = parseFloat(document.frm2.Z3.value);
    if (document.frm2.Z4.checked) {
        var z4 = 2.5;
    } else {
        var z4 = 1;
    }
        
    if (isNaN(r1)) {
        var g = 0;
    } else if(isNaN(s1)) {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1);
    } else if (isNaN(t1)) {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1);
    } else if (isNaN(u1)) {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1 + t2 * t3 * t4 / t1);
    } else if (isNaN(v1)) {
        var g = (d*0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1 + t2 * t3 * t4 / t1 + u2 * u3 * u4 / u1);
    } else if (isNaN(w1)) {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1 + t2 * t3 * t4 / t1 + u2 * u3 * u4 / u1 + v2 * v3 * v4 / v1);
    } else if (isNaN(x1)) {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1 + t2 * t3 * t4 / t1 + u2 * u3 * u4 / u1 + v2 * v3 * v4 / v1 + w2 * w3 * w4 / w1);
    } else if (isNaN(y1)) {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1 + t2 * t3 * t4 / t1 + u2 * u3 * u4 / u1 + v2 * v3 * v4 / v1 + w2 * w3 * w4 / w1 + x2 * x3 * x4 / x1);
    } else if (isNaN(z1)) {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1 + t2 * t3  * t4 / t1 + u2 * u3 * u4 / u1 + v2 * v3 * v4 / v1 + w2 * w3 * w4 / w1 + x2 * x3 * x4 / x1 + y2 * y3 * y4 / y1);
    } else {
        var g = (d * 0.01) * (r2 * r3 * r4 / r1 + s2 * s3 * s4 / s1 + t2 * t3 * t4 / t1 + u2 * u3 * u4 / u1 + v2 * v3 * v4 / v1 + w2 * w3 * w4 / w1 + x2 * x3 * x4 / x1 + y2 * y3 * y4 / y1 + z2 * z3 * z4 / z1);
    } var score2 = Math.floor(g)
        document.frm3.E.value = score1+score2;
        
    }