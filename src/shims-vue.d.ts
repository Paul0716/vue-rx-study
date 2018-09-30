

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  import { Subject } from "rxjs";
  export interface Vue {
    modal$?: Subject<boolean>;
  }
}
