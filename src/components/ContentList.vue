<!-- 歌手歌单列表 -->
<template>
    <div class="content-list">
        <ul class="section-content">
            <li class="content-item" v-for="(item, index) in contentList" :key="index">
                <div class="kuo" @click="goAlbum(item,item.name)"><!--歌手有name，歌单没有name,按照有没有name来跳转-->
                    <!--现在没数据，等后端接口完成后用第一行-->
                    <!-- <img class="item-img" :src="attachImageUrl(item.pic)" alt=""> -->
                    <img class="item-img" :src="require('@/assets/img/null(1).png')" alt="">
                    <div class="mask">
                        <svg class="icon">
                            <use xlink:href="#icon-bofang"></use> 
                        </svg>
                    </div>
                </div>
                <p class="item-name">{{ item.name||item.title }}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import { mixin } from '../mixins';
export default {
    name: "content-list",
    mixins: [mixin],
    props: ['contentList'],
    methods:{
        goAlbum(item,type){
            this.$store.commit("setTempList",item);
            if(type){
                this.$router.push({path:`singer-album/${item.id}`})
            }else{
                this.$router.push({path:`song-list-album/${item.id}`})
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/content-list.scss';
</style>
