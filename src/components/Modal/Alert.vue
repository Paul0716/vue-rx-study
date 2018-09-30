<template>
    <div class="backdrop"
        @click="cancel"
        v-if="modal$">
        <div class="modal">
            <button type="button"
                class="button"
                @click="cancel"
            >Cancel</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
    inject: ['AlertService'],
    subscriptions() {
        const vue = (this as any);
        return {
            modal$: vue.AlertService.modal$,
        };
    },
})
export default class Alert extends Vue {

    private cancel() {
        (this as any).$observables.modal$.next(false);
    }
}

</script>


<style lang="scss" scoped>
    .backdrop {
        background-color: rgba(122,122,122, .3);
        position: fixed;
        z-index:9999;
        width: 100vw;
        height: 100vh;
        top: 0px;
        left: 0px;

        .modal {
            background-color: white;
            width: 60vw;
            height: 40vh;
            margin-left: 20vw;
            margin-top: 30vh;
            border-radius: .5em;

            .button {
                padding: .5em 
            }
        }
    }
</style>
