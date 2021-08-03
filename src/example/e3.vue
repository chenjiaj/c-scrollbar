<template>
  <h1>鼠标放上去触发显示坐标 默认向上滚动100</h1>
  <c-scrollbar ref="scrollbarRef"
               width="500px"
               height="100px"
               trigger="hover"
               direction="all"
               :vBarStyle="{
               'background-color':'rgba(0,0,0,0.1)'
             }"
               :hBarStyle="{
               'background-color':'rgba(0,0,0,0.2)'
             }"
               :vThumbStyle="{
                'background-color':'rgba(0,0,0,0.3)'
             }"
               :hThumbStyle="{
                'background-color':'rgba(0,0,0,0.4)'
             }">
    <ul>
      <li style="white-space:nowrap">鼠标放上去触发显示坐标鼠标放上去触发显示坐标鼠标放上去触发显示坐标鼠标放上去触发显示坐标鼠标放上去触发显示坐标</li>
      <li>默认向上滚动100</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
    </ul>
  </c-scrollbar>
</template>

<script lang="ts">
// import cScrollbar from '@/Scrollbar/Index.vue';
import { onMounted, ref } from 'vue';

export default {
  //   components: {
  //     cScrollbar,
  //   },
  setup() {
    const scrollbarRef = ref();
    onMounted(() => {
      scrollbarRef.value.setScrollTop(100);
      scrollbarRef.value.setScrollLeft(10);
    });
    return {
      scrollbarRef,
    };
  },
};
</script>
