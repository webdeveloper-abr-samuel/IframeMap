var seleccionClasi = ""
var seleccionTipo = ""


function getClasificacion(myRadio) {
    seleccionClasi = myRadio
    showStations()
}

function getTipologia(myRadio) {
    seleccionTipo = myRadio
    showStations()

}

function borrarClas() {
    seleccionClasi  = ""
    document.getElementById("label-clasAA").classList.remove("active");
    document.getElementById("label-clasA").classList.remove("active");
    document.getElementById("label-clasB").classList.remove("active");
    document.getElementById("label-clasC").classList.remove("active");
    showStations()
}

function borrarTipo() {
    seleccionTipo = ""
    document.getElementById("label-electricos").classList.remove("active");
    document.getElementById("label-depositos").classList.remove("active");
    document.getElementById("label-f-general").classList.remove("active");
    document.getElementById("label-arquitectonicas").classList.remove("active");
    document.getElementById("label-otros").classList.remove("active");

    showStations()
}

// function getAnimation(myRadio) {
//     if(myRadio === "auto")
//         location.reload()
//     else
//     {
//         clearInterval(intervalo)
//         var id = window.setTimeout(function() {}, 0);

//         while (id--) {
//             window.clearTimeout(id); // will do nothing if no timeout with id is present
//         }
//     }

// }


var popupCal, popupPal, popupBlla, popupMed, popupMan, popupPer, popupArm, popupBta
var contentCal = `<div class="markers"  id="CaliQTY">Cali - 316</div>` // ok
var contentPal = '<div class="markers" id="PalmiraQTY">Palmira - 25</div>' // ok
var contentBlla = '<div class="markers" id="BarranquillaQTY">Barranquilla - 162</div>' // ok --
var contentMed = '<div class="markers" id="MedellinQTY">Medellín - 132</div>' // ok 
var contentMan = '<div class="markers" id="ManizalesQTY">Manizales - 62</div>' // ok
var contentPer = '<div class="markers" id="PereiraQTY">Pereira - 46</div>' // ok
var contentArm = '<div class="markers" id="ArmeniaQTY">Armenia - 5</div>' // ok
var contentBta = '<div class="markers" id="BogotaQTY">Bogota - 266</div>'

// 

var checkManual = document.getElementById("manual")
var checkAtomatico = document.getElementById("automatico")
var intervalo
var dataSet
var Colombia = [5.911116815631734, -75.71777343750001]
var Cali = [3.4197369321262703, -76.52029037475587]
var isAtColombia = true;
var ot = [-6.0968598188879355, -15.029296875000002]
var ni = [6.053161295714067, 63.98437500000001]
var layers;
var mapStyles = ['streets-v11', 'dark-v8', 'basic-v8', 'bright-v8', 'satellite-v9']
L.mapbox.accessToken = 'pk.eyJ1IjoiYml5ZWtlOTUxOSIsImEiOiJjazlkNm5sNjYwMGpyM25vZG85MXNrd2VuIn0.sNrwUsI3LFA1L-UzqRjyVQ';
//pk.eyJ1IjoiamViYWIiLCJhIjoiY2s2NmZ5cmJuMGdkYzNrbnN2d2prdms0cSJ9.eIAD_rWOeVGExAPl3nrXaA
// pk.eyJ1IjoidGhlcm5hbmRleiIsImEiOiJjazZpNGt3OG4wYTV3M3Vud25tYjJ5cWIxIn0.QpQz0w8KpV9TXGxdIvtl2Q
//pk.eyJ1IjoibWFwaWJveDEyMzQiLCJhIjoiY2s2bWk4MnNjMGx3bTNscGZ1OHo0bHRhZiJ9.tp1mjoRxtINs9qEAAiZe7Q
//pk.eyJ1IjoiamFraXkxNjY0OCIsImEiOiJjazczcm9yNmYwNXlkM29wb2d3cm1wN2Y5In0.sTQLVDgSHJAa9ft01OGUEQ
var map = L.map('map', {
        center: Colombia,
        zoom: 6.25
    })
    //.setView([Colombia[0], Colombia[1]], 6.25)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/' + mapStyles[0]))
    .on('move', function() {
        countL();
    });



var overlays = L.layerGroup().addTo(map);


let s = 4000
let getData = () => {

    L.mapbox.featureLayer('http://10.1.0.184:3002/ABRAGEO/getAll')
        .on('ready', function(e) {
            layers = e.target;
            document.getElementById("dataQty").innerHTML = Object.keys(layers._layers).length
            showStations();
            //animation()
            amplitud()
            publicidad()


            /*         intervalo = setInterval(() => {
                        animation()
                    }, s*207);  */

        });

}



getData()

let popupMaker = (coord, content) => {

    var popup = L.popup()
        .setLatLng(coord)
        .setContent(content)
        .openOn(map);

    return popup
}

function searchOp(array) {
    for (let index = 0; index < array.length; index++)
        if (array[index].selected === true)
            return (op = array[index].value)
}


function showStations() {

    // let sOP = [searchOp(filtersC),searchOp(filtersT),searchOp(filtersR)]

    // let opts = { clasificacion: seleccionClasi || '', tipologia: seleccionTipo || ''}

    /* 
    let opc = []
    for (let index = 0; index < Object.keys(opts).length; index++) {
        opc.push(Object.keys(opts)[index])
    } */
    var self = this



    // then remove any previously-displayed marker groups
    overlays.clearLayers();
    // create a new marker group
    var clusterGroup = new L.MarkerClusterGroup({


        /*         iconCreateFunction: function(cluster) {

                return new L.DivIcon({

                    iconSize: [40, 20],
                    html: '<div style="text-align:center;color:#000;background:' +
                    self.color + '">' + cluster.getChildCount() + '</div>'

                });

            } */

    }).addTo(overlays);

    let index = 0;

    let clientCounter = 0
    counterF = 0;
    counterD = 0;
    counterP = 0;
    counterE = 0;
    counterO = 0;


    layers.eachLayer(function(layer) {


        var marker = layer

        marker.setIcon(L.icon(marker.feature.properties.icon))
            .on('click', leftSide, layer.feature)



        if (seleccionTipo === "" && seleccionClasi === "") {
            clusterGroup.addLayer(layer);
            clientCounter++

        } else if (seleccionTipo !== "" && seleccionClasi === "") {
            if (layer.feature.properties.tipologia === seleccionTipo) {
                clusterGroup.addLayer(layer);
                clientCounter++
            }
        } else if (seleccionTipo === "" && seleccionClasi !== "") {
            if (layer.feature.properties.clasificacion === seleccionClasi) {
                clusterGroup.addLayer(layer);
                clientCounter++
            }
        } else {
            if (layer.feature.properties.tipologia === seleccionTipo && layer.feature.properties.clasificacion === seleccionClasi) {
                clusterGroup.addLayer(layer);
                clientCounter++
            }
        }



        if (layer.feature.properties.tipologia === 'Ferreterías en general') {
            counterF++;
        }
        if (layer.feature.properties.tipologia === 'Depósitos de materiales') {
            counterD++;
        }
        if (layer.feature.properties.tipologia === 'Almacenes de Pinturas Arquitectonicas') {
            counterP++;
        }
        if (layer.feature.properties.tipologia === 'Almacen de Eléctricos') {
            counterE++;
        }
        if (layer.feature.properties.tipologia !== 'Ferreterías en general' && layer.feature.properties.tipologia !== 'Depósitos de materiales' && layer.feature.properties.tipologia !== 'Almacenes de Pinturas Arquitectonicas' && layer.feature.properties.tipologia !== 'Almacen de Eléctricos') {
            counterO++;
        }


    });

    layers.eachLayer(function(layer) {


        // here you call `bindPopup` with a string of HTML you create - the feature
        // properties declared above are available under `layer.feature.properties`
        var content = '<div class="markers">' +
            '<p style="width: 335px">' + layer.feature.properties.nombreNegocio + '<p \/>' + '<\/div>'
        layer.bindPopup(content)
    });


    document.getElementById("tot").innerHTML = clientCounter
    document.getElementById("dataQty").innerHTML = clientCounter
    document.getElementById("totF").innerHTML = '<strong>' + counterF + '</strong>'
    document.getElementById("totD").innerHTML = '<strong>' + counterD + '</strong>'
    document.getElementById("totP").innerHTML = '<strong>' + counterP + '</strong>'
    document.getElementById("totE").innerHTML = '<strong>' + counterE + '</strong>'
    document.getElementById("totO").innerHTML = '<strong>' + counterO + '</strong>'

}

function countL() {
    counterF = 0;
    counterD = 0;
    counterP = 0;
    counterE = 0;
    counterO = 0;
    var features = [];
    layers.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
            if (map.getBounds().contains(layer.getLatLng())) {
                features.push(layer.feature);
                if (layer.feature.properties.tipologia === 'Ferreterías en general') {
                    counterF++;
                }
                if (layer.feature.properties.tipologia === 'Depósitos de materiales') {
                    counterD++;
                }
                if (layer.feature.properties.tipologia === 'Almacenes de Pinturas Arquitectonicas') {
                    counterP++;
                }
                if (layer.feature.properties.tipologia === 'Almacen de Eléctricos') {
                    counterE++;
                }
                if (layer.feature.properties.tipologia !== 'Ferreterías en general' && layer.feature.properties.tipologia !== 'Depósitos de materiales' && layer.feature.properties.tipologia !== 'Almacenes de Pinturas Arquitectonicas' && layer.feature.properties.tipologia !== 'Almacen de Eléctricos') {
                    counterO++;
                }
            }
        }
    });
    document.getElementById("dataQty").innerHTML = features.length;
    document.getElementById("totF").innerHTML = '<strong>' + counterF + '</strong>'
    document.getElementById("totD").innerHTML = '<strong>' + counterD + '</strong>'
    document.getElementById("totP").innerHTML = '<strong>' + counterP + '</strong>'
    document.getElementById("totE").innerHTML = '<strong>' + counterE + '</strong>'
    document.getElementById("totO").innerHTML = '<strong>' + counterO + '</strong>'
};


Highcharts.setOptions({
    colors: ['#FFF02D', '#638DC8', '#DA802D', '#B0CC49', '#CB2128'],
    height: 10,
    width: 10
});

let amplitud = () => {

    Highcharts.chart('amplitud', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'ANÁLISIS CUANTITATIVO AMPLITUD DE PORTAFOLIO EN VENTA'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            name: 'Lineas',
            // colorByPoint: true,
            data: [
                ['Una linea', 17],
                ['Entre 2 y 3 líneas', 10],
                ['Mas de 3 líneas', 17],
            ]

        }]
    });

    //chart.setSize(600, 400);
}


let publicidad = () => {

    Highcharts.chart('pub', {
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            }
        },

        title: {
            text: 'Publicidad'
        },

        xAxis: {
            categories: ['Publicidad externa', 'Publicidad interna', 'Exhibidor'],
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },

        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Cantidad de clientes',
                skew3d: true
            }
        },

        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} {point.stackTotal}'
        },

        plotOptions: {
            column: {
                depth: 40
            }
        },

        series: [{
            name: 'Si',
            data: [46, 62, 78]
        }, {
            name: 'No',
            data: [48, 48, 32]
        }]

    });

}

let animation = () => {
    for (let index = 0; index < animacion.length; index++) {
        setTimeout(() => { animacion[index]() }, (index + 1) * 3000)
    }
}


// funcion que llena el modal con los datos de los marcadores
let leftSide = (data) => {
    console.log(data)
    document.getElementById("NombreNegocio").value = data.sourceTarget.feature.properties.nombreNegocio;
    document.getElementById("Direccion").value = data.sourceTarget.feature.properties.direccion;
    document.getElementById("Telefono").value = data.sourceTarget.feature.properties.telefono;
    document.getElementById("Contacto").value = data.sourceTarget.feature.properties.contacto;
    if (data.sourceTarget.feature.properties.modificadoPor) {
        document.getElementById("Asesor").value = data.sourceTarget.feature.properties.modificadoPor;
    } else {
        document.getElementById("Asesor").value = data.sourceTarget.feature.properties.creadoPor;
    }
    if (data.sourceTarget.feature.properties.modificacion) {
        document.getElementById("Last").value = data.sourceTarget.feature.properties.modificacion;
    } else {
        document.getElementById("Last").value = data.sourceTarget.feature.properties.creacion;
    }
    document.getElementById("Ciudad").value = data.sourceTarget.feature.properties.ciudadPoblacion;
    document.getElementById("CantidadL").value = data.sourceTarget.feature.properties.lija;
    document.getElementById("CantidadF").value = data.sourceTarget.feature.properties.flap;
    document.getElementById("CantidadD").value = data.sourceTarget.feature.properties.corteFino;

    if (data.sourceTarget.feature.properties.pubExte == 'Si') {
        document.getElementById("avisoE").className = 'fas fa-check-circle fa-2x';
    } else {
        document.getElementById("avisoE").className = 'fas fa-times-circle fa-2x';
    }
    if (data.sourceTarget.feature.properties.pubInte == 'Si') {
        document.getElementById("avisoI").className = 'fas fa-check-circle fa-2x';
    } else {
        document.getElementById("avisoI").className = 'fas fa-times-circle fa-2x';
    }
    if (data.sourceTarget.feature.properties.exhibi == 'Si') {
        document.getElementById("exhibi").className = 'fas fa-check-circle fa-2x';
    } else {
        document.getElementById("exhibi").className = 'fas fa-times-circle fa-2x';
    }
    $('#myModal').modal('toggle');
    let text;
    if (data.sourceTarget.feature.properties.foto == '' || data.sourceTarget.feature.properties.foto == null) {
        text = '/default.png'
    } else {
        text = data.sourceTarget.feature.properties.foto.replace(/ /g, '')
        text = text.replace('.', '')
        text = text.replace(/"/g, '')
    }
    document.getElementById("foto").src = 'http://10.1.0.184:3002' + text;

}


function leftSideAnimation(data) {
    $('#myModal').modal('toggle');
    document.getElementById("NombreNegocio").value = data.properties.nombreNegocio;
    document.getElementById("Direccion").value = data.properties.direccion;
    document.getElementById("Telefono").value = data.properties.telefono;
    document.getElementById("Contacto").value = data.properties.contacto;
    if (data.properties.modificadoPor) {
        document.getElementById("Asesor").value = data.properties.modificadoPor;
    } else {
        document.getElementById("Asesor").value = data.properties.creadoPor;
    }
    if (data.properties.modificacion) {
        document.getElementById("Last").value = data.properties.modificacion;
    } else {
        document.getElementById("Last").value = data.properties.creacion;
    }
    document.getElementById("Ciudad").value = data.properties.ciudadPoblacion;
    document.getElementById("CantidadL").value = data.properties.lija;
    document.getElementById("CantidadF").value = data.properties.flap;
    document.getElementById("CantidadD").value = data.properties.corteFino;

    if (data.properties.pubExte == 'Si') {
        document.getElementById("avisoE").className = 'fas fa-check-circle fa-2x';
    } else {
        document.getElementById("avisoE").className = 'fas fa-times-circle fa-2x';
    }
    if (data.properties.pubInte == 'Si') {
        document.getElementById("avisoI").className = 'fas fa-check-circle fa-2x';
    } else {
        document.getElementById("avisoI").className = 'fas fa-times-circle fa-2x';
    }
    if (data.properties.exhibi == 'Si') {
        document.getElementById("exhibi").className = 'fas fa-check-circle fa-2x';
    } else {
        document.getElementById("exhibi").className = 'fas fa-times-circle fa-2x';
    }
    let text
    if (data.properties.foto == '' || data.properties.foto == null) {
        text = '/default.png'
    } else {
        text = data.properties.foto.replace(/ /g, '')
        text = text.replace('.', '')
        text = text.replace(/"/g, '')
    }
    document.getElementById("foto").src = 'http://10.1.0.184:3002' + text;

}


$('#dateFrom').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#dateUntil').datepicker({
    uiLibrary: 'bootstrap4'
});

function getDataHour() {
    var date = new Date;

    var hour = date.getHours();

    var year = date.getFullYear();
    var month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
    var day = date.getDate();
    if (month < 10) {
        month = '0' + month;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }

    var hora = year + '-' + month + '-' + day + ' ' + hour + '%'
    document.getElementById("hora").innerText = 'Visitas realizada desde las ' + hour + ':00 horas hasta las ' + hour + ':59 horas'

    fetch('http://10.1.0.184:3002/ABRAGEO/datoHora', {
            method: "POST",
            body: JSON.stringify({ 'hora': hora }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(function(response) {
            return response.json();
        })
        .catch(error => console.error('Error:', error))
        .then(function(myJson) {
            if (myJson.Datos[0]['visitas'] > 0) {
                document.getElementById("countExhibi").innerText = myJson.Datos[0]['exhibidores']
                document.getElementById("countInter").innerText = myJson.Datos[0]['aviso exterior']
                document.getElementById("countExter").innerText = myJson.Datos[0]['aviso interior']
                document.getElementById("total").innerText = myJson.Datos[0]['visitas']
            } else {
                document.getElementById("countExhibi").innerText = '0'
                document.getElementById("countInter").innerText = '0'
                document.getElementById("countExter").innerText = '0'
                document.getElementById("total").innerText = '0'
            }
        });
}

function getDataHourInt() {
    setInterval(function() {
        var date = new Date;

        var hour = date.getHours() - 1;

        var year = date.getFullYear();
        var month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
        var day = date.getDate();
        if (month < 10) {
            month = '0' + month;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }

        var hora = year + '-' + month + '-' + day + ' ' + hour + '%'
        document.getElementById("hora").innerText = 'Visitas realizada desde las ' + hour + ':00 horas hasta las ' + hour + ':59 horas'

        fetch('http://10.1.0.184:3002/ABRAGEO/datoHora', {
                method: "POST",
                body: JSON.stringify({ 'hora': hora }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then(function(response) {
                return response.json();
            })
            .catch(error => console.error('Error:', error))
            .then(function(myJson) {
                if (myJson.Datos[0]['visitas'] > 0) {
                    document.getElementById("countExhibi").innerText = myJson.Datos[0]['exhibidores']
                    document.getElementById("countInter").innerText = myJson.Datos[0]['aviso exterior']
                    document.getElementById("countExter").innerText = myJson.Datos[0]['aviso interior']
                    document.getElementById("total").innerText = myJson.Datos[0]['visitas']
                } else {
                    document.getElementById("countExhibi").innerText = '0'
                    document.getElementById("countInter").innerText = '0'
                    document.getElementById("countExter").innerText = '0'
                    document.getElementById("total").innerText = '0'
                }
            });
    }, (1000 * 60 * 10))
}


function getDataDay() {
    var date = new Date;

    var year = date.getFullYear();
    var month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
    var day = date.getDate();
    var dayOfWeek = date.getDay();
    if (month < 10) {
        month = '0' + month;
    }
    if (dayOfWeek == 1) {
        day = day - 3;
        document.getElementById("tituEstad").innerText = 'Estadisticas del dia Viernes'
    }
    if (dayOfWeek == 6) {
        day = day - 1;
        document.getElementById("tituEstad").innerText = 'Estadisticas del dia Viernes'
    }
    if (dayOfWeek == 2) {
        document.getElementById("tituEstad").innerText = 'Estadisticas del dia Lunes'
    }
    if (dayOfWeek == 3) {
        document.getElementById("tituEstad").innerText = 'Estadisticas del dia Martes'
    }
    if (dayOfWeek == 4) {
        document.getElementById("tituEstad").innerText = 'Estadisticas del dia Miercoles'
    }
    if (dayOfWeek == 5) {
        document.getElementById("tituEstad").innerText = 'Estadisticas del dia Jueves'
    }

    var hora = year + '-' + month + '-' + day + '%'
        // document.getElementById("hora").innerText = 'Visitas realizada desde las ' + hour + ':00 horas hasta las ' + hour + ':59 horas'


    fetch('http://10.1.0.184:3002/ABRAGEO/datoHora', {
            method: "POST",
            body: JSON.stringify({ 'hora': hora }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(function(response) {
            return response.json();
        })
        .catch(error => console.error('Error:', error))
        .then(function(myJson) {
            var calcu = myJson.Datos[0];
            if (myJson.Datos[0]['visitas'] > 0) {
                document.getElementById("efec").innerText = parseInt((calcu['ventas'] / calcu['visitas']) * 100) + '%'
                document.getElementById("promVis").innerText = parseInt(calcu['visitas'] / calcu['agentes'])
                document.getElementById("promExhib").innerText = parseInt((calcu['exhibidores'] / calcu['visitas']) * 100) + '%'
                if (calcu['aviso exterior'] < calcu['aviso interior']) {
                    document.getElementById("promAvis").innerText = parseInt((calcu['aviso interior'] / calcu['visitas']) * 100) + '%'
                }
                if (calcu['aviso exterior'] > calcu['aviso interior']) {
                    document.getElementById("promAvis").innerText = parseInt((calcu['aviso exterior'] / calcu['visitas']) * 100) + '%'
                }

                document.getElementById("Agent").innerText = calcu['agentes']
                document.getElementById("totalVisi").innerText = calcu['visitas']
            } else {
                document.getElementById("efec").innerText = '0'
                document.getElementById("promVis").innerText = '0'
                document.getElementById("promExhib").innerText = '0'
                document.getElementById("promAvis").innerText = '0'
                document.getElementById("Agent").innerText = '0'
                document.getElementById("totalVisi").innerText = '0'
            }
        });
}


timeoutID = []
timeoutID2 = []

function stop() {
    this.timeoutID.forEach(function(timer) {
        clearTimeout(timer);
    });
    this.timeoutID2.forEach(function(timer) {
        clearTimeout(timer);
    });
}

function modales() {
    $('#myModal').modal('show')
}