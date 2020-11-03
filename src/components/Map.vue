<template>
    <v-main>
        <div id="container">
            <v-chip
                    class="mt-8 mr-4 float-right"
                    color="indigo"
                    text-color="white"
                    id="cityChip"
            >
                <v-avatar left>
                    <v-icon>mdi-map-marker</v-icon>
                </v-avatar>
                {{city}}
            </v-chip>
        </div>
    </v-main>
</template>

<script>
    import AMapLoader from '@amap/amap-jsapi-loader';
    import LbsLocInfo from '../assets/LbsLocInfo'

    export default {
        name: "Map",
        data() {
            return {
                city: "Jeremy",
                purePath: [
                    // {"x": 116.478928, "y": 39.997761, "sp": 19, "ag": 0, "tm": 1478031031},
                ],
                testPath: LbsLocInfo,
                convertPath: [],
                pointsPath: [],
                markerList: []
            }
        },
        methods: {
            loadMap: function () {
                console.log(this.testPath.length);
                let jeremy = this;
                AMapLoader.load({
                    "key": "3c618ebb54475fb63eb35b900519cd6f",
                    "version": "2.0",
                }).then((AMap) => {
                    let map = new AMap.Map('container', {
                        resizeEnable: true
                    });
                    // 同时引入工具条插件，比例尺插件和鹰眼插件
                    AMap.plugin([
                        'AMap.ToolBar',
                        'AMap.Scale',
                        'AMap.GraspRoad'
                    ], function () {
                        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                        map.addControl(new AMap.ToolBar(
                            {
                                position: {
                                    top: '80px',
                                    right: '40px'
                                }
                            }
                        ));

                        // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                        map.addControl(new AMap.Scale({
                            position: "RB"
                        }));


                        for (let i = 0; i < jeremy.testPath.length; i++) {
                            let lat = jeremy.testPath[i].lat;
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
                            });
                        }
                    });
                }).catch(e => {
                    console.log(e);
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

    #cityChip {
        z-index: 121;
    }
</style>
