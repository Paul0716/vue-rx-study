<template>
    <table>
        <thead>
            <tr>
                <td>#</td>
                <td>User</td>
                <td>Title</td>
                <td>Body</td>
            </tr>
        </thead>
        <tbody>
            <tr v-if="posts"
                :key="`${index}`"
                v-for="(post, index) in posts">
                <td>{{ post.id }}</td>
                <td>{{ userName(index) }}</td>
                <td>{{ post.title  }}</td>
                <td>{{ post.body  }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    inject: ['PostService']
})
export default class PostList extends Vue {
    private posts: any[] = [];

    private userName(index: number) {
        try {
            const user = this.posts[index].user;
            return user ? user.name: '';
        } catch(err) {
            console.error(err);
        }
    }

    private async mounted() {
        const vue = (this as any);
        const postList = await vue.PostService.postList();

        for(let i = 0; i < postList.data.length; i++) {
            const el = postList.data[i];
            const user = await vue.PostService.getUser(el.userId);
            postList.data[i]['user'] = {
                ...user.data
            };
        }
        this.posts = postList.data;
    }
    
}
</script>

