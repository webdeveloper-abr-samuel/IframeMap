var app = new Vue({
    el: '#myModal',
    data: {
        position: [],
        cambio: 0,
        datos: []
    },

    created() {
        getDataDay();
        getDataHour();
        getDataHourInt();
        this.getPositions()
    },

    methods: {
        getPositions() {
            this.$http.get('http://10.1.0.184:3002/ABRAGEO/animationData')
                .then((data) => {
                    this.position = data.body.positions;
                    this.datos = data.body.positions;

                    for (let i in this.position) {
                        timeoutID.push(
                            setTimeout(() => {
                                let h = i + 1;
                                step = [this.position[i]['lat'], this.position[i]['lon']]
                                this.animation(step, i)
                                    // console.log(i);
                                if ((i + 1) % 5 == 0) {
                                    map.setZoom(8)
                                }
                                $('#carousel').carousel('next')
                                if (i == 1000) {
                                    location.reload();
                                }

                            }, 3000 * (i + 1))
                            // i = 200
                        )

                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        },

        animation(pasos, c) {
            let x = [];
            let datos = [];

            layers.eachLayer(function(layer) {
                x = [layer.feature.geometry.coordinates[1], layer.feature.geometry.coordinates[0]]

                if (x[0] == pasos[0] && x[1] == pasos[1]) {
                    datos = layer.feature
                    var content = '<div class="markers"><p style="width: 335px">' + layer.feature.properties.nombreNegocio + '<p \/>' + '<\/div>'
                    L.popup().setLatLng([(parseFloat(pasos[0]) + 0.0003), (parseFloat(pasos[1]) + 0.0006)]).setContent(content).openOn(map)
                }
            })
            for (let i = 1; i < 15; i++) {
                timeoutID2.push(
                    setTimeout(() => {
                        if (this.datos[c]['ciudad'] == this.datos[parseInt(c) + 1]['ciudad']) {
                            this.cambio = 1
                        } else {
                            this.cambio = 0
                        }
                        console.log(this.cambio)
                        if (this.cambio == 0) {
                            if (i == 1) {
                                map.panTo(pasos)
                            }
                            if (i == 5) {
                                leftSideAnimation(datos)
                            }
                            if (i == 8) {
                                $('#collapseTwo').collapse('toggle')

                            }
                            if (i == 11) {
                                $('#collapseThree').collapse('toggle')
                            }
                            if (i == 13) {
                                $('#collapseOne').collapse('toggle')
                                $('#myModal').modal('toggle');

                            }
                            if (i == 14) {
                                map.setZoom(10)
                            }
                            if (i > 1 && i < 8) {
                                map.setZoom(map.getZoom() + 1.25)
                                    // map.panTo([pasos[0] + 0.055, pasos[1] + 0.105])
                            }
                            if (i > 11 && i < 15) {
                                map.setZoom(map.getZoom() - 1.10)
                            }
                        }
                        if (this.cambio == 1) {
                            if (i == 1) {
                                map.panTo(pasos)
                            }
                            if (i == 4) {
                                leftSideAnimation(datos)
                            }
                            if (i == 8) {
                                $('#collapseTwo').collapse('toggle')

                            }
                            if (i == 11) {
                                $('#collapseThree').collapse('toggle')
                            }
                            if (i == 13) {
                                $('#collapseOne').collapse('toggle')
                                $('#myModal').modal('toggle');

                            }
                            if (map.getZoom() < 18 && i > 1) {
                                map.setZoom(map.getZoom() + 1.25)
                            }
                            if (i > 13 && i < 15) {
                                map.setZoom(map.getZoom() - 1.10)
                            }
                        }
                        // console.log(i + ' el del otro loop')

                    }, 2000 * (i))
                )
            }

        }

    }
})