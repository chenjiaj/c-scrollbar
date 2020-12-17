最近开始尝试vue3开发项目，用了ant-desigin-vue框架，但是发现没有滚动条组件，因此自己尝试着写了一个，有需要的可以使用，有什么问题可以给我提issue。

### 基于vue3的滚动条组件

##### 一、使用

```
npm install c-scrollbar --save // 下载依赖
```

全局注册 main.ts

```
import { createApp } from 'vue';
import cScrollbar from 'c-scrollbar';
import App from './App.vue';

createApp(App).use(cScrollbar).mount('#app';
```

局部引入

```
import {cScrollbar} from 'c-scrollbar';
export default{
  components: {
    cScrollbar,
  },
}
```

App.vue

```
<template>
  sdsd
  <c-scrollbar width="100px"
               height="40px">
    <ul>
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
```


##### 二、属性

| 属性 | 类型 | 默认值 | 说明 |
| ---- | ---- | ---- | ---- |
| height | String | '100px' | 垂直方向，内容超过此高度出现滚动条。最好不要使用百分比，除非父级元素设置了具体高度 |
| width | String | '100%'| 水平方向 ，内容超过此高度出现滚动条 。 | 
| trigger | String | 'always' | 触发显示滚动条。可填写的值有 'always'、'hover'、'none'。'always' 一直显示 ，'hover' 鼠标移动上去显示 ， 'none' 不显示|
|direction|String|'all'| 可滚动的方向。可填写的值有'all'、'x'、'y'。'all'垂直水平方向都可以滚动，'x'只可以在横向滚动，'y'只可以在垂直方向上滚动。|
|vBarStyle|Object|{'background-color': ''}| 垂直方向上轨道样式设置。修改垂直方向上轨道的样式|
|hBarStyle|Object|{'background-color': ''}| 水平方向上轨道样式设置。修改水平方向上轨道的样式|
|vThumbStyle|Object|{'background-color': 'rgba(0, 0, 0, 0.2)'}| 垂直方向上滑块样式设置。修改垂直方向上滑块滑块的样式|
|hThumbStyle|Object|{'background-color': 'rgba(0, 0, 0, 0.2)'}| 水平方向上滑块样式设置。修改水平方向上滑块滑块的样式|

##### 三、方法

| 方法名 | 参数类型 | 说明 |
| ---- | ---- | ---- |
| setScrollTop | number | 调用方式 setScrollTop(scrollTop) |
| setScrollLeft | number | 调用方式 setScrollLeft(scrollLeft) |

##### 四、事件

|事件名| 说明|
| ---- | ---- |
|scroll| 滚动时触发|

##### 五、参考实例：

```
<template>
  <cScrollbar width="300px"
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
             }"
             @scroll="handleScroll">
    <ol>
      <li>11111121212112121211212121121212112121211212121121212112
        1212112121221212111121212112121211212121121212112121211212121
        1212121121212112121221212111121212112121211212121121212112121
        211212121121212112121211212122121211212121121212112121211212121121
        212112121211212121121212112121221212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
      <li>1121212</li>
    </ol>
  </cScrollbar>
</template>

<script lang="ts">
export default {
  setup() {
    function handleScroll(event: Event) {
      console.log(event);
    }
    return {
      handleScroll,
    };
  },
};
</script>
  
```


```
<template>
  sdsd
  <c-scrollbar ref="scrollbarRef"
               width="100px"
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
      <li>serwerwerwerwer</li>
      <li>serwerwerwerwer</li>
    </ul>
  </c-scrollbar>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import {cScrollbar} from 'c-scrollbar';

export default {
  components: {
    cScrollbar,
  },
  setup() {
    const scrollbarRef = ref();
    onMounted(() => {
      scrollbarRef.value.setScrollTop(100); // 设置距离顶部滚动距离
      scrollbarRef.value.setScrollLeft(10); // 设置距离左边滚动距离
    });
    return {
      scrollbarRef,
    };
  },
};
</script>

```

##### 六、实现核心思路

1. 通过MutationObserver、window.resize监听div元素内容或属性改变、监听窗口改变去更新滚动条滑块高度
2. 通过::-webkit-scrollbar（谷歌、Edge）、 scrollbar-width: none;（火狐）隐藏原生滚动条
3. 通过监听原生scroll事件去改变滑块的高度
4. 点击轨道或拖动滑块时，监听mousedown事件去改变外层wrap的scrollTop或scrollLeft值。（改变此值会触发scroll事件）
