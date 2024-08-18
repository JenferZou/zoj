<template>
  <a-row id="globalHeader" align="center" :wrap="false">
    <a-col flex="auto">
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
          <a-menu-item v-for="item in visibleRoute" :key="item.path">
            {{ item.name }}
          </a-menu-item>
        </a-menu>
      </div>
    </a-col>
    <a-col flex="100px">
      <div>
        {{ store.state.user?.loginUser?.userName ?? "未登录" }}
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "@/router/route";
import { useRouter } from "vue-router";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import accessEnum from "@/access/accessEnum";

const store = useStore();
const router = useRouter();
const selectedKey = ref(["/"]);
const longinUser = store.state.user.loginUser;
router.afterEach((to, from, failure) => {
  selectedKey.value = [to.path];
});
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
// const visibleRoute = routes.filter((item) => {
//   if (item.meta?.hideInMenu) {
//     return false;
//   }
//   if (!checkAccess(longinUser, item?.meta?.access as string)) {
//     return false;
//   }
//   return true;
// });

const visibleRoute = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (
      !checkAccess(store.state.user.loginUser, item?.meta?.access as string)
    ) {
      console.log(item);
      console.log(longinUser.userRole);
      return false;
    }
    return true;
  });
});

// const visibleRoute = watch(longinUser, () => {
//   routes.filter((item) => {
//     if (item.meta?.hideInMenu) {
//       return false;
//     }
//     if (!checkAccess(longinUser, item?.meta?.access as string)) {
//       return false;
//     }
//     return true;
//   });
// });
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
