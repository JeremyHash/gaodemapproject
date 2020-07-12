<template>
    <v-main id="container">
        <v-chip
                class="ma-12 float-right"
                color="indigo"
                text-color="white"
                id="cityChip"
        >
            <v-avatar left>
                <v-icon>mdi-account-circle</v-icon>
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
                let jeremy = this;
                let map = AMapLoader.load({
                    "key": "3c618ebb54475fb63eb35b900519cd6f",   // 申请好的Web端开发者Key，首次调用 load 时必填
                    "version": "2.0",   // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
                    "plugins": []  //插件列表
                }).then((AMap) => {
                    map = new AMap.Map('container');
                    AMap.plugin('AMap.CitySearch', function () {
                        //实例化城市查询类
                        var citysearch = new AMap.CitySearch();
                        //自动获取用户IP，返回当前城市
                        citysearch.getLocalCity(function (status, result) {
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.city && result.bounds) {
                                    jeremy.city = result.city;
                                    var citybounds = result.bounds;
                                    //地图显示当前城市
                                    map.setBounds(citybounds);
                                }
                            } else {
                                console.log(result.info);
                            }
                        });
                    });
                    AMap.plugin('AMap.GraspRoad', function () {
                        var grasp = new AMap.GraspRoad();
                        grasp.driving(jeremy.originPath, function (error, result) {
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
                                })
                                map.add(newLine)
                                map.setFitView()
                            }
                        })
                    })
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
