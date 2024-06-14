<template>
  <main>
    <a-page-header title="Novo Chamado" />

    <a-form
      ref="formRef"
      :model="formState"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-item ref="title" label="Titulo" name="title">
        <a-input v-model:value="formState.title" />
      </a-form-item>

      <a-form-item ref="description" label="Descrição" name="description">
        <a-textarea v-model:value="formState.description" />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Criar</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">Limpar</a-button>
      </a-form-item>
    </a-form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formState: {
        title: '',
        description: '',
        status: 'Aberto'
      },
      rules: {
        title: [{ required: true, message: 'Digite o título do chamado', trigger: 'blur' }],
        description: [{ required: true, message: 'Digite a mensagem do chamado', trigger: 'blur' }]
      },
      labelCol: { span: 5 },
      wrapperCol: { span: 13 }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.formRef
        .validate()
        .then(async (valid) => {
          if (valid) {
            try {
              const response = await this.$axios.post('/tickets', this.formState)
              this.$router.push(`/help-desk/${response.data.id}`)
            } catch (error) {
              console.log(error)
            }
          } else {
            console.log('Erro de validação!')
          }
        })
        .catch((error) => {
          console.error('Erro na validação:', error)
        })
    },
    resetForm() {
      this.$refs.formRef.resetFields()
    }
  }
}
</script>

<style scoped>
.a-form{
display: flex;
flex-direction: column;
}
</style>