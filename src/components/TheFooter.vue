<!-- 底部内容 -->
<template>
    <div class="the-footer">
      <p v-for="(item, index) in list" :key="index">
        {{item}}
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'the-footer',
    data () {
      return {
        list: [
          `摆烂 | 摸鱼 | 划水 | 躺平`,
          `Copyright © 2024`,
          `Designed by CoolQWind Music`
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  @import '../assets/css/the-footer.scss';
  </style>