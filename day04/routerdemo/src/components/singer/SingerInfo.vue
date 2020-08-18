<template>
    <div>
        <h4>歌手信息</h4>
        <h5>{{info}}</h5>
    </div>
</template>

<script>
import { getSingerInfo } from '../../api/getSingerInfo';

export default {
    data(){
        return {
            info:''
        }
    },
    created() {
        this.getSingerInfo(this.$route.params.url);
    },
    beforeRouteUpdate (to, from, next) {
        console.log(to+','+from);
        next();
        this.getSingerInfo(to.params.url);
    },
    methods: {
        getSingerInfo(url,name){
            switch(url){
                case 'zhm' : name="张惠妹"; break;
                case 'hcy' : name="华晨宇"; break;
                case 'zys' : name="张雨生"; break;
                default : name="张宇";
            }
            getSingerInfo(name).then(data => {
                this.info = data;
            })
        }
    },
}
</script>

<style scoped>
    
</style>