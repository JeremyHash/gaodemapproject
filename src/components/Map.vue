<template>
    <v-main>
        <div id="container">
            <v-btn
                class="mt-8 mr-4 float-right locBtn"
                :color="wifiColor"
                text-color="white"
                rounded
                @click="WiFiLocHandler"
            >
                <v-icon left>
                    mdi-map-marker
                </v-icon>
                WiFi
            </v-btn>
            <v-btn
                class="mt-8 mr-4 float-right locBtn"
                :color="cellColor"
                text-color="white"
                rounded
                @click="CellLocHandler"
            >
                <v-icon left>
                    mdi-map-marker
                </v-icon>
                Cell
            </v-btn>
            <v-btn
                class="mt-8 mr-4 float-right locBtn"
                :color="gpsColor"
                text-color="white"
                rounded
                @click="GPSLocHandler"
            >
                <v-icon left>
                    mdi-map-marker
                </v-icon>
                GPS
            </v-btn>
            <v-btn
                class="mt-8 mr-4 float-right locBtn"
                color="primary"
                text-color="white"
                rounded
                @click="refresh"
                :disabled="refreshDisable"
            >
                <v-icon left>
                    mdi-cached
                </v-icon>
                刷新
            </v-btn>
        </div>
    </v-main>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';

export default {
    name: "Map",
    data() {
        return {
            refreshDisable: false,
            wifiColor: "gray",
            cellColor: "gray",
            gpsColor: "gray",
            cellLocInfo: {},
            wifiLocInfo: {},
            gpsLocInfo: {},
            cellMarker: {},
            wifiMarker: {},
            gpsMarker: {},
            cellLocStatus: false,
            wifiLocStatus: false,
            gpsLocStatus: false,
            getCellAxiosConfig: {
                url: "http://wiki.airm2m.com:48080/getCellLocInfo",
                method: "get"
            },
            getWiFiAxiosConfig: {
                url: "http://wiki.airm2m.com:48080/getWiFiLocInfo",
                method: "get"
            },
            getGPSAxiosConfig: {
                url: "http://wiki.airm2m.com:48080/getGPSLocInfo",
                method: "get"
            }
        }
    },
    methods: {
        loadMap: function () {
            let jeremy = this;
            AMapLoader.load({
                "key": "3c618ebb54475fb63eb35b900519cd6f",
                "version": "2.0",
            }).then((AMap) => {
                jeremy.map = new AMap.Map('container', {
                    resizeEnable: true
                });
                // 同时引入工具条插件，比例尺插件和鹰眼插件
                AMap.plugin([
                    'AMap.ToolBar',
                    'AMap.Scale',
                    'AMap.GraspRoad'
                ], function () {
                    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                    /*jeremy.map.addControl(new AMap.ToolBar(
                        {
                            position: {
                                top: '80px',
                                right: '40px'
                            }
                        }
                    ));*/

                    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                    jeremy.map.addControl(new AMap.Scale({
                        position: "RB"
                    }));

                    /* let lat = jeremy.testPath[i].lat;
                     let lng = jeremy.testPath[i].lng;
                     let timestamp = jeremy.testPath[i].timestamp;
                     AMap.convertFrom([lng, lat], 'gps', function (status, result) {
                         if (result.info === 'ok') {
                             var lnglats = result.locations;
                             lng = lnglats[0].lng;
                             lat = lnglats[0].lat;
                             let jeremyPoint = {
                                 "lng": lng,
                                 "lat": lat,
                                 "timestamp": timestamp
                             };
                             jeremy.convertPath.push(jeremyPoint);
                             let point = new AMap.LngLat(lng, lat);
                             let marker = new AMap.Marker({
                                 position: point,
                                 label: {
                                     content: i + 1,
                                     direction: 'right'
                                 }
                             });
                             jeremy.markerList.push(marker);
                             jeremy.pointsPath.push(point);
                             if (i === jeremy.testPath.length - 1) {
                                 let newLine = new AMap.Polyline({
                                     path: jeremy.pointsPath,
                                     strokeWeight: 6,
                                     strokeOpacity: 0.8,
                                     strokeColor: '#00D3FC',
                                     // showDir: true,
                                     // lineJoin: "round"
                                 });
                                 // map.add(newLine);
                                 map.add(jeremy.markerList);
                                 map.setFitView();
                             }
                         }
                     });*/

                });
            }).catch(e => {
                console.log(e);
            });
        },
        CellLocHandler: function () {
            this.cellColor === "primary" ? this.cellColor = "gray" : this.cellColor = "primary"
            this.cellLocStatus === true ? this.cellLocStatus = false : this.cellLocStatus = true
        },
        WiFiLocHandler: function () {
            this.wifiColor === "primary" ? this.wifiColor = "gray" : this.wifiColor = "primary"
            this.wifiLocStatus === true ? this.wifiLocStatus = false : this.wifiLocStatus = true
        },
        GPSLocHandler: function () {
            this.gpsColor === "primary" ? this.gpsColor = "gray" : this.gpsColor = "primary"
            this.gpsLocStatus === true ? this.gpsLocStatus = false : this.gpsLocStatus = true
        },
        refresh: function () {
            let jeremy = this
            jeremy.map.remove(jeremy.cellMarker)
            jeremy.map.remove(jeremy.wifiMarker)
            jeremy.map.remove(jeremy.gpsMarker)
            jeremy.refreshDisable = true
            if (jeremy.cellLocStatus) {
                this.axios(this.getCellAxiosConfig).then(function (res) {
                    if (res) {
                        jeremy.cellLocInfo = res.data
                        jeremy.refreshDisable = false
                    }
                }).catch(function (error) {
                    jeremy.refreshDisable = false
                    console.log(error);
                });
            }
            if (jeremy.wifiLocStatus) {
                this.axios(this.getWiFiAxiosConfig).then(function (res) {
                    if (res) {
                        jeremy.wifiLocInfo = res.data
                        jeremy.refreshDisable = false
                    }
                }).catch(function (error) {
                    jeremy.refreshDisable = false
                    console.log(error);
                });
            }
            if (jeremy.gpsLocStatus) {
                this.axios(this.getGPSAxiosConfig).then(function (res) {
                    if (res) {
                        jeremy.gpsLocInfo = res.data
                        jeremy.refreshDisable = false
                    }
                }).catch(function (error) {
                    jeremy.refreshDisable = false
                    console.log(error);
                });
            }
            jeremy.refreshDisable = false
        }
    },
    watch: {
        cellLocInfo: function () {
            let jeremy = this
            AMap.convertFrom([jeremy.cellLocInfo.lng, jeremy.cellLocInfo.lat], 'gps', function (status, result) {
                if (result.info === 'ok') {
                    var lngAndlat = result.locations;
                    let gdLng = lngAndlat[0].lng;
                    let gdLat = lngAndlat[0].lat;
                    let point = new AMap.LngLat(gdLng, gdLat);
                    let unixTimestamp = new Date(jeremy.cellLocInfo.timestamp * 1000);
                    let commonTime = unixTimestamp.toLocaleString()
                    jeremy.cellMarker = new AMap.Marker({
                        position: point,
                        label: {
                            content: `Cell\r\nLng:${gdLng}, Lat:${gdLat}, time:${commonTime}`,
                            direction: 'top'
                        }
                    });

                    jeremy.map.add(jeremy.cellMarker);
                    jeremy.map.setFitView();

                }
            });
        },
        wifiLocInfo: function () {
            let jeremy = this
            AMap.convertFrom([jeremy.wifiLocInfo.lng, jeremy.wifiLocInfo.lat], 'gps', function (status, result) {
                if (result.info === 'ok') {
                    var lngAndlat = result.locations;
                    let gdLng = lngAndlat[0].lng;
                    let gdLat = lngAndlat[0].lat;
                    let point = new AMap.LngLat(gdLng, gdLat);
                    let unixTimestamp = new Date(jeremy.wifiLocInfo.timestamp * 1000);
                    let commonTime = unixTimestamp.toLocaleString()
                    jeremy.wifiMarker = new AMap.Marker({
                        position: point,
                        label: {
                            content: `WiFi\r\nLng:${gdLng}, Lat:${gdLat}, time:${commonTime}`,
                            direction: 'top'
                        }
                    });

                    jeremy.map.add(jeremy.wifiMarker);
                    jeremy.map.setFitView();

                }
            });
        },
        gpsLocInfo: function () {

        },
    },
    mounted() {
        this.loadMap();
    }
}
</script>
<style scoped>
#container {
    width: 100%;
    height: 100%;
}

.locBtn {
    z-index: 1;
}

</style>
