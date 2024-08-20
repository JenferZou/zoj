<template>
  <CodeEditor :value="codeValue" :handle-change="codeHandleChange"></CodeEditor>
  <MdEditor :value="value" :handle-change="handleChange"></MdEditor>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script setup lang="ts">
import MdEditor from "@/components/MdEditor.vue";
import { ref } from "vue";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src
const value = ref("");
const handleChange = (v: string) => {
  value.value = v;
};
const codeValue = ref("");
const codeHandleChange = (v: string) => {
  value.value = v;
};
</script>
