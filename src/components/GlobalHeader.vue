<template>
  <div class="menu-demo">
    <a-menu
      :selected-keys="selectedKey"
      mode="horizontal"
      :default-selected-keys="['1']"
      @menu-item-click="doMenuClick"
    >
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <div class="title-bar">
          <div class="title">JenferOj</div>
        </div>
      </a-menu-item>
      <a-menu-item v-for="item in routes" :key="item.path">
        {{ item.name }}
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/route";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const selectedKey = ref(["/"]);
router.afterEach((to, from, failure) => {
  selectedKey.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-neutral-2);
}

.title {
  color: #444;
}
</style>
