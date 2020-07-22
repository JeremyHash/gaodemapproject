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

    export default {
        name: "Map",
        data() {
            return {
                city: "定位中",
                purePath: [
                    // {"x": 116.478928, "y": 39.997761, "sp": 19, "ag": 0, "tm": 1478031031},
                ],
                testPath: [
                    {"x": 116.478928, "y": 39.997761, "sp": 19, "ag": 0, "tm": 1478031031},
                    {"x": 116.478907, "y": 39.998422, "sp": 10, "ag": 0, "tm": 2},
                    {"x": 116.479384, "y": 39.998546, "sp": 10, "ag": 110, "tm": 3},
                    {"x": 116.481053, "y": 39.998204, "sp": 10, "ag": 120, "tm": 4},
                    {"x": 116.481793, "y": 39.997868, "sp": 10, "ag": 120, "tm": 5},
                    {"x": 116.482898, "y": 39.998217, "sp": 10, "ag": 30, "tm": 6},
                    {"x": 116.483789, "y": 39.999063, "sp": 10, "ag": 30, "tm": 7},
                    {"x": 116.484674, "y": 39.999844, "sp": 10, "ag": 30, "tm": 8}]
            }
        },
        methods: {
            loadMap: function () {
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

                        let requestLineAddr = jeremy.$store.state.requestLineAddr;
                        if (requestLineAddr !== '') {
                            let requestLineConfig = {
                                method: "get",
                                url: requestLineAddr,
                            };
                            jeremy.axios(requestLineConfig).then(function (res) {
                                let points = res.data.data.tracks[0];
                                /*for (let i = 0; i < 10; i++) {
                                    points.points.shift();
                                    points.points.pop()
                                }
                                points.points.pop();
                                points.points.pop();*/
                                if (points) {
                                    let firstTime = (points.points[0].locatetime) / 1000;
                                    for (let i = 0; i < points.points.length; i++) {
                                        // {"x": 116.478928, "y": 39.997761, "sp": 19, "ag": 0, "tm": 1478031031},
                                        // {accuracy: 550, direction: 33, height: 12, locatetime: 1595227602000, location: "121.595393,31.071242"}
                                        let location = points.points[i].location;
                                        if (i === 0) {
                                            jeremy.purePath.push(
                                                {
                                                    "x": parseFloat(location.split(",")[0]),
                                                    "y": parseFloat(location.split(",")[1]),
                                                    "sp": points.points[i].speed,
                                                    "ag": points.points[i].direction,
                                                    "tm": (points.points[i].locatetime) / 1000
                                                }
                                            )
                                        } else {
                                            jeremy.purePath.push(
                                                {
                                                    "x": parseFloat(location.split(",")[0]),
                                                    "y": parseFloat(location.split(",")[1]),
                                                    "sp": points.points[i].speed,
                                                    "ag": points.points[i].direction,
                                                    "tm": (points.points[i].locatetime / 1000) - firstTime
                                                }
                                            )
                                        }
                                    }

                                    console.log(jeremy.purePath);
                                    console.log(jeremy.testPath);

                                    let graspRoad = new AMap.GraspRoad();

                                    graspRoad.driving(jeremy.purePath, function (error, result) {
                                        console.log(error);
                                        if (!error) {
                                            var path2 = [];
                                            var newPath = result.data.points;
                                            for (var i = 0; i < newPath.length; i += 1) {
                                                path2.push([newPath[i].x, newPath[i].y])
                                            }
                                            var newLine = new AMap.Polyline({
                                                path: path2,
                                                strokeWeight: 8,
                                                strokeOpacity: 0.8,
                                                strokeColor: '#0091ea',
                                                showDir: true
                                            });
                                            map.add(newLine);
                                            console.log("添加路线");
                                            map.setFitView()
                                        }
                                    })
                                }
                            })
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
