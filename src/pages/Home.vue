<template>
  <div class="home">
    <!--轮播图-->
    <swiper/>
    <!--热门歌单/歌手-->
    <div class="section" v-for="(item, index) in songsList" :key="index">
      <div class="section-title">{{item.name}}</div>
      <content-list :contentList="item.list"></content-list>
    </div>
  </div>
</template>
<script>
import Swiper from '../components/Swiper';
import { getAllSinger, getAllSongList } from '../api/index';
import contentList from '../components/ContentList';
export default {
  name: 'Home',
  components: {
    Swiper,
    contentList
  },
  data() {
    // return {
    //   songsList: [
    //     {
    //       name: "歌单", list: []
    //     },
    //     {
    //       name: "歌手", list: []
    //     }
    //   ]
    // }
    return {
      songsList: [
        {
          name: "歌单", 
          list: [
            { title: "流行热歌",id:1},
            { title: "经典老歌",id:2},
            { title: "网络流行",id:3},
            { title: "经典老歌",id:4},
            { title: "网络流行",id:5},
            { title: "经典老歌",id:6},
            { title: "网络流行",id:7},
            { title: "经典老歌",id:8},
            { title: "网络流行",id:9}
          ]
        },
        {
          name: "歌手", 
          list: [
            
            { name: "林宥嘉",id:1},
            { name: "汪苏泷",id:2},
            { name: "张学友",id:3},
            { name: "邓紫棋",id:4},
            { name: "李荣浩",id:5},
            { name: "王菲",id:6},
            { name: "张靓颖",id:7},
            { name: "李宇春",id:8},
            { name: "周笔畅",id:9},
            { name: "周杰伦",id:10},
          ]
        }
      ]
    }
  },
  created() {
    // 这里的API调用可以注释掉，因为我们使用静态数据，后续后端接口完成后再打开
    // this.getSongList();
    // this.getSinger();
  },
  methods: {
    getSongList() {
      getAllSongList().then((res) => {
        this.songsList[0].list = res.slice(0, 10);
      }).catch((err) => {
        console.log(err);
      })
    },
    getSinger() {
      getAllSinger().then((res) => {
        this.songsList[1].list = res.slice(0, 10);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>
  
<style lang="scss" scoped>
@import '../assets/css/home.scss';
</style>