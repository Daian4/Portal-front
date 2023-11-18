<template>
  <main>

    <a-page-header title="Crachá" /> 


    <a-tabs v-model:activeKey="activeKey" v-if="user">
      <a-tab-pane key="1" tab="Frente">
        <div class="base-badge">
          <div class="header"></div>
          <div class="content">
            <div class="avatar">
              <img src="https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png" alt="" class="src">
            </div>
            <div class="name">{{ user.name}}</div>
          </div>
          <div class="footer"></div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Verso">
        <div class="base-badge back">
          <ul>
            <li><b>Nome:</b> {{ user.name }}</li>
            <li><b>E-mail:</b> {{ user.email }}</li>
            <li><b>Telefone:</b> {{ user.phone }}</li>
          </ul>
        </div>
      </a-tab-pane>
    </a-tabs>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeKey: '1',
      user: null
    }
  },
  created(){
    this.fetchUser()
  },
  methods: {
    async fetchUser(){
      try {
        const response = await this.$axios.get('/users')
        this.user = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
  .base-badge {
    width: 200px;
    height: 300px;
    border: 1px solid rgb(28, 23, 23);
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .back {
    background: #f05d14;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header, .footer {
    background: #f05d14;
    height: 60px;
  }

  .avatar {
    display: flex;
  }
  .avatar img {
    width: 60%;
    margin: 0px auto;
    border-radius: 50%;
  }

  .name {
    text-align: center;
    font-weight: 600;
    margin-top: 8px;
  }

  ul {
    list-style: none;
    color: #fff;
    padding: 0;
  }
</style>