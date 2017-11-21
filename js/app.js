var subtitulo = document.getElementById('subtitulo');
var subSprint = document.getElementById('subSprint');
console.log(data.LIM['2016-2'].students.active);

var activas = 0;
var totalGeneracion = 0;
var dropoutPorcentaje = 0;
var metaSuperada = 0;
var porcentajeTotalSuperada = 0;
var nps = 0;
var metaSuperadaTec = 0;
var metaSuperadaHSE = 0;
var satisfaccion = 0;
var promedioProfesores = 0;
var promedioJedis = 0;

//funcion santiago 2016-2
document.getElementById('SCL20162').addEventListener('click', function() {
    var dropoutSCL162 = 0;
    var sprintHSE = 0;
    var sprintTech = 0;
    var contTotal = 0;
    var sprint = 0;

    //cuantas alumnas siguen en laboratoria Santiago 2016-2
    var totalSCL162 = data.SCL["2016-2"].students;
    for (var i = 0; i < totalSCL162.length; i++) {
        if (totalSCL162[i].active == false) {
            dropoutSCL162++;
        }
    }

    //total de alumnas en chile 2016-2
    document.getElementById("total1").innerHTML = totalSCL162.length;
    dropoutPorcentaje = Math.round((dropoutSCL162 * 100) / totalSCL162.length);
    document.getElementById("porct1").innerHTML = dropoutPorcentaje + '%';

    subtitulo.innerHTML = 'Santiago de Chile 2016-2';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';

    //santiago promedio total sprint hse y tech
    for (var i = 0; i < totalSCL162.length; i++) {
        for (var j = 0; j < totalSCL162[i].sprints.length; j++) {
            sprintHSE += totalSCL162[i].sprints[j].score.hse;
            sprintTech += totalSCL162[i].sprints[j].score.tech;
            sprint++;
        }
        if (parseInt(sprintHSE / sprint) + parseInt(sprintTech / sprint) >= 2100) {
            contTotal++;
        }
    }
    var porct162 = parseInt((contTotal * 100) / totalSCL162.length);
    document.getElementById('total2').innerHTML = contTotal;
    document.getElementById('porct2').innerHTML = porct162 + '%';
    document.getElementById('total2').value = '';
    document.getElementById('porct2').value = '';
})

//funcion santiago 2017-1
document.getElementById('SCL20171').addEventListener('click', function() {
    var dropoutSCL171 = 0;
    var sprintHSE = 0;
    var sprintTech = 0;
    var contTotal = 0;
    var sprint = 0;

    //cuantas alumnas siguen en laboratoria Santiago 2016-2
    var totalSCL171 = data.SCL["2017-1"].students;
    for (var i = 0; i < totalSCL171.length; i++) {
        if (totalSCL171[i].active == false) {
            dropoutSCL171++;
        }
    }

    //total de alumnas en chile 2017-1
    document.getElementById("total1").innerHTML = totalSCL171.length;
    dropoutPorcentaje = Math.round((dropoutSCL171 * 100) / totalSCL171.length);
    document.getElementById("porct1").innerHTML = dropoutPorcentaje + '%';

    subtitulo.innerHTML = 'Santiago de Chile 2017-1';

    //santiago promedio total sprint hse y tech
    for (var i = 0; i < totalSCL171.length; i++) {
        for (var j = 0; j < totalSCL171[i].sprints.length; j++) {
            sprintHSE += totalSCL171[i].sprints[j].score.hse;
            sprintTech += totalSCL171[i].sprints[j].score.tech;
            sprint++;
        }
        if (parseInt(sprintHSE / sprint) + parseInt(sprintTech / sprint) >= 2100) {
            contTotal++;
        }
    }
    var porct171 = parseInt((contTotal * 100) / totalSCL171.length);

    document.getElementById('total2').innerHTML = contTotal;
    document.getElementById('porct2').innerHTML = porct171 + '%';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';
    document.getElementById('total2').value = '';
    document.getElementById('porct2').value = '';
})

//funcion santiago 2017-2
document.getElementById('SCL20172').addEventListener('click', function() {
    var dropoutSCL172 = 0;
    var sprintHSE = 0;
    var sprintTech = 0;
    var contTotal = 0;
    var sprint = 0;
    //cuantas alumnas siguen en laboratoria Santiago 2017-2
    var totalSCL172 = data.SCL["2017-2"].students;
    for (var i = 0; i < totalSCL172.length; i++) {
        if (totalSCL172[i].active == false) {
            dropoutSCL172++;
        }
    }

    //total de alumnas en chile 2017-2
    document.getElementById("total1").innerHTML = totalSCL172.length;
    dropoutPorcentaje = Math.round((dropoutSCL172 * 100) / totalSCL172.length);

    //santiago promedio total sprint hse y tech
    for (var i = 0; i < totalSCL172.length; i++) {
        for (var j = 0; j < totalSCL172[i].sprints.length; j++) {
            sprintHSE += totalSCL172[i].sprints[j].score.hse;
            sprintTech += totalSCL172[i].sprints[j].score.tech;
            sprint++;
        }
        if (parseInt(sprintHSE / sprint) + parseInt(sprintTech / sprint) >= 2100) {
            contTotal++;
        }
    }
    var porct171 = parseInt((contTotal * 100) / totalSCL172.length);
    document.getElementById("porct1").innerHTML = dropoutPorcentaje + '%';
    subtitulo.innerHTML = 'Santiago de Chile 2017-2';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';
    document.getElementById('total2').value = '';
    document.getElementById('porct2').value = '';
})



//funcion total santiago
document.getElementById('SCL').addEventListener('click', function() {

})


//funcion para CDMX 2017-1
document.getElementById('CDMX20171').addEventListener('click', function() {

    var dropoutCDMX171 = 0;
    var sprintHSE = 0;
    var sprintTech = 0;
    var contTotal = 0;
    var sprint = 0;
    //cuantas alumnas siguen en laboratoria CDMéxico 2017-1
    var totalCDMX171 = data.CDMX['2017-1'].students;
    for (var i = 0; i < totalCDMX171.length; i++) {
        if (totalCDMX171[i].active == false) {
            dropoutCDMX171++;
        }
    }

    //total alumnas en CDMX 2017-1
    document.getElementById('total1').innerHTML = totalCDMX171.length;
    dropoutPorcentaje = Math.round((dropoutCDMX171 * 100) / totalCDMX171.length);
    document.getElementById('porct1').innerHTML = dropoutPorcentaje + '%';

    //mexico promedio total sprint hse y tech
    for (var i = 0; i < totalCDMX171.length; i++) {
        for (var j = 0; j < totalCDMX171[i].sprints.length; j++) {
            sprintHSE += totalCDMX171[i].sprints[j].score.hse;
            sprintTech += totalCDMX171[i].sprints[j].score.tech;
            sprint++;
        }
        if (parseInt(sprintHSE / sprint) + parseInt(sprintTech / sprint) >= 2100) {
            contTotal++;
        }
    }
    var porct171 = parseInt((contTotal * 100) / totalCDMX171.length);
    document.getElementById("porct1").innerHTML = dropoutPorcentaje + '%';
    subtitulo.innerHTML = 'Ciudad de México 2017-1';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';
    document.getElementById('total2').value = '';
    document.getElementById('porct2').value = '';
})

//funcion para CDMX 2017-2
document.getElementById('CDMX20172').addEventListener('click', function() {
    var dropoutCDMX172 = 0;
    var sprintHSE = 0;
    var sprintTech = 0;
    var contTotal = 0;
    var sprint = 0;
    //cuantas alumnas siguen en laboratoria CDMéxico 2017-2
    var totalCDMX172 = data.CDMX['2017-2'].students;
    for (var i = 0; i < totalCDMX172.length; i++) {
        if (totalCDMX172[i].active == false) {
            dropoutCDMX172++;
        }
    }

    //total alumnas en CDMX 2017-2
    document.getElementById('total1').innerHTML = totalCDMX172.length;
    dropoutPorcentaje = Math.round((dropoutCDMX172 * 100) / totalCDMX172.length);
    document.getElementById('porct1').innerHTML = dropoutPorcentaje + '%';

    subtitulo.innerHTML = 'Ciudad de México 2017-2';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';
})

//funcion para LIM 2016-2
document.getElementById('LIM20162').addEventListener('click', function() {
    var dropoutLIM162 = 0;
    var sprintHSE = 0;
    var sprintTech = 0;
    var contTotal = 0;
    var sprint = 0;
    //cuantas alumnas siguen en laboratoria Lima 2016-2
    var totalLIM162 = data.LIM['2016-2'].students;
    for (var i = 0; i < totalLIM162.length; i++) {
        if (totalLIM162[i].active == false) {
            dropoutLIM162++;
        }
    }

    //total alumnas en Lima 2016-2
    document.getElementById('total1').innerHTML = totalLIM162.length;
    dropoutPorcentaje = Math.round((dropoutLIM162 * 100) / totalLIM162.length);
    document.getElementById('porct1').innerHTML = dropoutPorcentaje + '%';

    subtitulo.innerHTML = 'Lima 2016-2';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';
})

//funcion para LIM 2017-1
document.getElementById('LIM20171').addEventListener('click', function() {
    var dropoutLIM171 = 0;
    //cuantas alumnas siguen en laboratoria Lima 2016-2
    var totalLIM171 = data.LIM['2017-1'].students;
    for (var i = 0; i < totalLIM171.length; i++) {
        if (totalLIM171[i].active == false) {
            dropoutLIM171++;
        }
    }

    //total alumnas en Lima 2017-1
    document.getElementById('total1').innerHTML = totalLIM171.length;
    dropoutPorcentaje = Math.round((dropoutLIM171 * 100) / totalLIM171.length);
    document.getElementById('porct1').innerHTML = dropoutPorcentaje + '%';

    subtitulo.innerHTML = 'Lima 2017-1';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';
})

//funcion para LIM 2017-2
document.getElementById('LIM20172').addEventListener('click', function() {
    var dropoutLIM172 = 0;
    //cuantas alumnas siguen en laboratoria Lima 2016-2
    var totalLIM172 = data.LIM['2017-2'].students;
    for (var i = 0; i < totalLIM172.length; i++) {
        if (totalLIM172[i].active == false) {
            dropoutLIM172++;
        }
    }

    //total alumnas en Lima 2017-2
    document.getElementById('total1').innerHTML = totalLIM172.length;
    dropoutPorcentaje = Math.round((dropoutLIM172 * 100) / totalLIM172.length);
    document.getElementById('porct1').innerHTML = dropoutPorcentaje + '%';

    subtitulo.innerHTML = 'Lima 2017-2';
    document.getElementById("total1").value = '';
    document.getElementById("porct1").value = '';
})

//
//console.log(data.AQP['2016-2'].students[0].sprints[0].score.hse);
//santiago 2016-2

var sprint1HSE = 0;
var sprintTech = 0;
var contTotal = 0;
var sprint = 0;
var SCL162 = data.SCL['2016-2'].students;
//santiago promedio total sprint hse y tech
for (var i = 0; i < SCL162.length; i++) {
    for (var j = 0; j < SCL162[i].sprints.length; j++) {
        sprint1HSE += SCL162[i].sprints[j].score.hse;
        sprintTech += SCL162[i].sprints[j].score.tech;
        sprint++;
    }
    console.log('estudiante ' + SCL162[i].name + ' total hse: ' + parseInt(sprint1HSE / sprint) + ', tech: ' + parseInt(sprintTech / sprint));
    console.log(parseInt(sprint1HSE / sprint) + parseInt(sprintTech / sprint));
    if (parseInt(sprint1HSE / sprint) + parseInt(sprintTech / sprint) >= 2100) {
        contTotal++;
    }
}

console.log(contTotal);