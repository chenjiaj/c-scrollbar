<template>
  <div v-for="(item,key) in components"
       :key="key">
    <component :is="key"></component>
  </div>

</template>

<script lang="ts">
// import cScrollbar from '@/Scrollbar/Index.vue';
// import { onMounted, ref } from 'vue';

const components: any = {};
const files: any = require.context('./example/', false, /\.vue$/);

files.keys().forEach((key: string, index: number) => {
  const file = files(key).default;
  const name = `example${index}`;
  components[name] = file;
});

export default {
  components: {
    ...components,
  },
  setup() {
    return {
      components,
    };
  },
};
</script>
