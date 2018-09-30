import axios from "axios";

class PostService {
    private $http: any;
    constructor(http: any) {
        this.$http = http;
    }

    public async postList(postId?: number) {
        const id = postId || '';
        try {
            return await this.$http
                .get(`http://jsonplaceholder.typicode.com/posts/${id}`);
        } catch(err) {
            console.error(err);
        }
        
    }

    public async getUser(userId: number): Promise<any> {
        const id = userId || '';
        try {
            return await this.$http
                .get(`http://jsonplaceholder.typicode.com/users/${id}`);
        } catch(err) {
            console.error(err);
        }
        
    }



}
export default new PostService(axios);
