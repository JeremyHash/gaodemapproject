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
                @click="changeRefreshStatus"
            >
                <v-icon left>
                    mdi-cached
                </v-icon>
                {{ refreshStatus }}
            </v-btn>
            <v-btn
                class="mt-8 mr-4 float-right locBtn"
                color="primary"
                text-color="white"
                rounded
                @click="refresh"
            >
                <v-icon left>
                    mdi-cached
                </v-icon>
                手动刷新
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
            refreshStatus: "自动刷新",
            wifiColor: "primary",
            cellColor: "primary",
            gpsColor: "red",
            refreshInterval: 0,
            cellLocInfo: {},
            wifiLocInfo: {},
            gpsLocInfo: {},
            cellMarker: {},
            wifiMarker: {},
            gpsMarker: {},
            cellLocStatus: true,
            wifiLocStatus: true,
            gpsLocStatus: true,
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
                    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                    jeremy.map.addControl(new AMap.Scale({
                        position: "RB"
                    }));
                });
            }).catch(e => {
                console.log(e);
            });
        },
        CellLocHandler: function () {
            this.cellColor === "gray" ? this.cellColor = "primary" : this.cellColor = "gray"
            this.cellLocStatus === true ? this.cellLocStatus = false : this.cellLocStatus = true
        },
        WiFiLocHandler: function () {
            this.wifiColor === "gray" ? this.wifiColor = "primary" : this.wifiColor = "gray"
            this.wifiLocStatus === true ? this.wifiLocStatus = false : this.wifiLocStatus = true
        },
        GPSLocHandler: function () {
            this.gpsColor === "gray" ? this.gpsColor = "red" : this.gpsColor = "gray"
            this.gpsLocStatus === true ? this.gpsLocStatus = false : this.gpsLocStatus = true
        },
        changeRefreshStatus: function () {
            let refreshStatus = this.refreshStatus
            if (refreshStatus === "自动刷新") {
                this.refreshStatus = "刷新中"
                this.refreshInterval = setInterval(this.refresh, 5000)
            } else {
                this.refreshStatus = "自动刷新"
                clearInterval(this.refreshInterval)
            }
        },
        refresh: function () {
            let jeremy = this
            jeremy.map.remove(jeremy.cellMarker)
            jeremy.map.remove(jeremy.wifiMarker)
            jeremy.map.remove(jeremy.gpsMarker)
            if (jeremy.cellLocStatus) {
                this.axios(this.getCellAxiosConfig).then(function (res) {
                    if (res) {
                        jeremy.cellLocInfo = res.data
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            if (jeremy.wifiLocStatus) {
                this.axios(this.getWiFiAxiosConfig).then(function (res) {
                    if (res) {
                        jeremy.wifiLocInfo = res.data
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
            if (jeremy.gpsLocStatus) {
                this.axios(this.getGPSAxiosConfig).then(function (res) {
                    if (res) {
                        jeremy.gpsLocInfo = res.data
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    },
    watch: {
        refreshStatus: function () {

        },
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
            let jeremy = this
            AMap.convertFrom([jeremy.gpsLocInfo.lng, jeremy.gpsLocInfo.lat], 'gps', function (status, result) {
                if (result.info === 'ok') {
                    var lngAndlat = result.locations;
                    let gdLng = lngAndlat[0].lng;
                    let gdLat = lngAndlat[0].lat;
                    let point = new AMap.LngLat(gdLng, gdLat);
                    let unixTimestamp = new Date(jeremy.gpsLocInfo.timestamp * 1000);
                    let commonTime = unixTimestamp.toLocaleString()
                    jeremy.gpsMarker = new AMap.Marker({
                        position: point,
                        label: {
                            content: `GPS\r\nLng:${gdLng}, Lat:${gdLat}, ${commonTime}`,
                            direction: 'top'
                        },
                        icon: new AMap.Icon({
                            size: new AMap.Size(19, 26),
                            image: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
                            imageSize: new AMap.Size(19, 26)
                        })
                    });


                    jeremy.map.add(jeremy.gpsMarker);
                    jeremy.map.setFitView();

                }
            });
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
