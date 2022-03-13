<template>
  <h1 class="text-center text-2xl text-red-400">{{message}}</h1>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "",
    };
  },
  async mounted() {
    const { text } = await (await fetch("/api/message")).json();
    this.message = text;
  },
};
</script>