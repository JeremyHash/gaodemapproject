<template>
    <v-main id="container">
        <v-card id="card" max-width="400px" outlined hover class="float-right">
            您当前所在城市:{{city}}
        </v-card>
    </v-main>
</template>

<script>
    import AMapLoader from '@amap/amap-jsapi-loader';

    export default {
        name: "Map",
        data() {
            return {
                city: ""
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
                            console.log(status);
                            console.log(result);
                            if (status === 'complete' && result.info === 'OK') {
                                if (result && result.city && result.bounds) {
                                    jeremy.city = result.city;
                                    var citybounds = result.bounds;
                                    console.log(jeremy.city);
                                    // document.getElementById('info').innerHTML = '您当前所在城市：' + this.city;
                                    //地图显示当前城市
                                    map.setBounds(citybounds);
                                }
                            } else {
                                console.log(result.info);
                            }
                        });
                    })
                }).catch(e => {
                    console.log(e);
                });
            }
        },
        mounted() {
            this.loadMap()
        }
    }
</script>
<style scoped>
    #container {
        width: 100%;
        height: 100%;
    }

    #card {
        z-index: 121;
    }
</style>
