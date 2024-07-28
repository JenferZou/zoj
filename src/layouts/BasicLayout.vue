<template>
  <div id="basicLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <GlobalHeader></GlobalHeader>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import GlobalHeader from "@/components/GlobalHeader.vue";

export default defineComponent({
  components: { GlobalHeader },
});
</script>

<style scoped>
#basicLayout .header {
  background-color: red;
}

#basicLayout .content {
  background-color: red;
}

#basicLayout .footer {
  background-color: aliceblue;
  padding: 16px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
}
</style>
