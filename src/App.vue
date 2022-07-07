<template>
  <q-layout view="lHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="lt-sm"/>
        <q-toolbar-title>
          Title
        </q-toolbar-title>
        <q-tabs class="gt-xs" inline-label>
          <q-route-tab
              v-for="link of links"
              :to="link.url"
              :icon="link.icon"
              :label="link.title"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay elevated>
      <q-scroll-area class="fit">
        <q-tabs vertical>
          <q-route-tab
              v-for="link of links"
              :to="link.url"
              :icon="link.icon"
              :label="link.title"
          />
        </q-tabs>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  data () {
    return {
      links: [
        { title: 'Home', icon: 'code', url: '/home' },
        { title: 'Market', icon: 'code', url: '/market' },
        { title: 'Posts', icon: 'code', url: '/posts' }
      ]
    }
  }
}
</script>
<style>
::-webkit-scrollbar{
  width: 0;
}
</style>
