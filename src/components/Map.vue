<template>
    <v-main id="container">
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
    </v-main>
</template>

<script>
    import AMapLoader from '@amap/amap-jsapi-loader';

    export default {
        name: "Map",
        data() {
            return {
                jeremy: {},
                city: "",
                originPath: [
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
                AMapLoader.load({
                    "key": "3c618ebb54475fb63eb35b900519cd6f",
                    "version": "2.0",
                }).then((AMap) => {
                    let map = new AMap.Map('container');
                    // 同时引入工具条插件，比例尺插件和鹰眼插件
                    AMap.plugin([
                        'AMap.Geolocation',
                        'AMap.ToolBar',
                        'AMap.Scale',
                        'AMap.ControlBar'
                    ], function () {
                        var geolocation = new AMap.Geolocation({
                            // 是否使用高精度定位，默认：true
                            enableHighAccuracy: true,
                            // 设置定位超时时间，默认：无穷大
                            timeout: 10000,
                            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
                            buttonOffset: new AMap.Pixel(10, 20),
                            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                            zoomToAccuracy: true,
                            //  定位按钮的排放位置,  RB表示右下
                            buttonPosition: 'RB'
                        });

                        geolocation.getCurrentPosition(function (status, result) {
                            if (status === 'complete') {
                                onComplete(result)
                            } else {
                                onError(result)
                            }
                        });

                        function onComplete(data) {
                            // data是具体的定位信息
                            console.log(data)
                        }

                        function onError(data) {
                            // 定位出错
                            console.log(data)
                        }

                        // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                        map.addControl(new AMap.ToolBar(
                            {
                                position: {
                                    top: '230px',
                                    right: '40px'
                                }
                            }
                        ));

                        map.addControl(new AMap.ControlBar({
                            position: {
                                top: '130px',
                                right: '10px',
                            }
                        }),);

                        // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                        map.addControl(new AMap.Scale({
                            position: "RB"
                        }));

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
