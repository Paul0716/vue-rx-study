<template>
    <div>
        <post-list />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PostService from '@/services/PostService';
import PostList from '@/components/PostList.vue';

@Component({
    components: {
        PostList,
    },
    provide: {
        PostService,
    },
})
export default class Posts extends Vue {}
</script>

<style lang="sass" scoped>
    
</style>

