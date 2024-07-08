<template>
    <div class="search">
        <nav class="searchList-nav" ref="change">
            <!--toggle变量用于控制当前激活的视图类别。它的值决定了哪个标签（例如“歌曲”或“歌单”）显示为活跃状态。这是通过动态绑定类active来实现的，当toggle的值与标签对应时，该标签会显示为活跃状态。
-->
            <span :class="{isActive:toggle === 'Songs'}" @click="handleChangeView('Songs')">歌曲</span>
            <span :class="{isActive:toggle === 'SongsLists'}" @click="handleChangeView('SongsLists')">歌单</span>
        </nav>
        <component :is="currentView"></component>
    </div>
</template>
<script>
import searchSongs from "@/components/search/SearchSongs.vue"
import searchSongsLists from "@/components/search/SearchSongsLists.vue"
export default {
    name: 'search',
    components: {
        searchSongs,
        searchSongsLists
    },
    data() {
        return {
            toggle: 'Songs',
            currentView: 'searchSongs'
        }
    },
    methods: {
        handleChangeView(component) {
            this.currentView = 'search' + component;
            this.toggle = component;
        },
    }
}

</script>
<style lang="scss" scoped>
@import '../assets/css/search.scss';
</style>

