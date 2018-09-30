<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <a
      @click="toggleModal"
      >Toggle Modal</a>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <count />
    <alert-modal />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Count from '@/components/Count.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import AlertModal from '@/components/Modal/Alert.vue'; // @ is an alias to /src
import AlertService from '@/services/ALertService';

@Component({
  components: {
    HelloWorld,
    Count,
    AlertModal,
  },
  inject: [
    'AlertService',
  ],
})
export default class Home extends Vue {

  private toggleModal() {
    const vue = (this as any);
    vue.AlertService.show();
  }
}
</script>

<style lang="scss" scoped>

</style>
