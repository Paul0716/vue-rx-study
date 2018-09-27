<template>
    <div class="count">
        This is counter: {{ interval$ }}
    </div>
</template>

<script lang="ts">
import { interval, Observable, Subject } from 'rxjs';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    subscriptions: () => {
        const interval$ = interval(1000);

        return {
            interval$
        }
  }
})
export default class Count extends Vue {}
</script>

<style lang="scss" scoped>
    .count {
        background-color: #8c8c8c;
    }
</style>
