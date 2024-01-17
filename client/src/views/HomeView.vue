<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{ testmessage }}
    {{ count }}
    <button @click.prevent="increment()">test</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  setup() {
    const testmessage = ref<string>('Hello Vue 3 with TypeScript1111!');
    const count = ref<number>(0);

    function increment():void {
      count.value += 1;
    }

    return { testmessage, count, increment };
  },

});
</script>
