<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#f05d14',
      },
    }"
  >
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="extract">Extrato</a-menu-item>
        <a-menu-item key="badge">Crachá</a-menu-item>
        <a-menu-item key="help-desk">Help desk</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Início</a-breadcrumb-item>
        <a-breadcrumb-item>{{ routerName }}</a-breadcrumb-item>
      </a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
      <router-view/>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
    </a-layout-footer>
  </a-layout>
  </a-config-provider>
</template>

<script>
export default {
  data() {
    return {
      selectedKeys: [this.$route.name]
    }
  },
  computed: {
    routerName(){
     if(this.$route.name === 'badge'){
      return 'Crachá'
     } else if(this.$route.name === 'extract'){
      return 'Extrato'
     } else{
      return 'Suporte'
     }
    }
  },
  watch: {
    selectedKeys(routerName){
      this.$router.push({name: routerName[0]})
    }
  }
}
</script>