import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import SongList from '@/pages/SongList'
import Singer from '@/pages/Singer'
import MyMusic from '@/pages/MyMusic'
import Search from '@/pages/Search'
import Lyric from '@/pages/Lyric'
import LoginIn from '@/pages/LoginIn'
import SignUp from '@/pages/SignUp'
import Setting from '@/pages/Setting'
import SingerAlbum from '@/pages/SingerAlbum'
import SongListAlbum from '@/pages/SongListAlbum'

Vue.use(Router)

export default new Router({
  routes : [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/song-list',
      name: 'song-list',
      component: SongList
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/my-music',
      name: 'my-music',
      component: MyMusic
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/lyric',
      name: 'lyric',
      component: Lyric
    },
    {
      path: '/login-in',
      name: 'login-in',
      component: LoginIn
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: SignUp
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/singer-album/:id',
      name: 'singer-album',
      component: SingerAlbum
    },
    {
      path: '/song-list-album/:id',
      name: 'song-list-album',
      component: SongListAlbum
    },
  ],
  //使得每次路由跳转后页面都会滚动到顶部
  scrollBehavior (to, from, savedPosition){
    return {x:0,y:0}
  }
})



