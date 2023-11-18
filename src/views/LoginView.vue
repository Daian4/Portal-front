<template>
   <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#f05d14',
      },
    }"
  >
    </a-config-provider>
  <main>
    <div class="content">
      <a-card style="max-width: 500px">
    <a-form
      :model="formState"
      name="normal_login"
      class="login-form"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="email"
        name="email"
        :rules="[{ required: true, message: 'Digite seu email!' }]"
      >
        <a-input v-model:value="formState.email">
          <template #prefix>
            <UserOutlined class="site-form-item-icon" />
          </template>
        </a-input>
      </a-form-item>

      <a-form-item
        label="Senha"
        name="password"
        :rules="[{ required: true, message: 'Digite sua senha!' }]"
      >
        <a-input-password v-model:value="formState.password">
          <template #prefix>
            <LockOutlined class="site-form-item-icon" />
          </template>
        </a-input-password>
      </a-form-item>

      <a-form-item>
        <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
          entrar
        </a-button>
        Ou
        <a href="">cadastre-se!</a>
      </a-form-item>
    </a-form>
    </a-card>
  </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      formState: {
        email: '',
        password: ''
      },
      disabled: false
    }
  },
  methods: {
    async onFinish(){
      try {
        const response = await this.$axios.post('/login', this.formState)
        localStorage.setItem('token', response.data.token)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
        alert(error.response.data.message)
      }
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #eee;
}
</style>
