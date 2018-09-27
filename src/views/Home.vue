<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <count />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Count from '@/components/Count.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Count,
  },
})
export default class Home extends Vue {}
</script>
