<template>
  <main>
    <a-page-header title="Chamado" />

    <p>
      Descricao
    </p>

    <a-divider>Comentários</a-divider>

    <a-form ref="formRef" :model="formState" :rules="rules">
      <a-form-item ref="message" label="Comentario" name="message">
        <a-textarea v-model:value="formState.message" />
      </a-form-item>

      <a-button type="primary" @click="onSubmit">Comentar</a-button>

    </a-form>


    <a-list class="comments" :loading="initLoading" item-layout="horizontal" :data-source="comments">
      <template #renderItem="{ item }">
        <a-list-item>

          <a-list-item-meta :description="item.comment">
            <template #title>
              <a href="#">{{ item.name }}</a>
            </template>
            <template #avatar>
              <a-avatar src="" />
            </template>
          </a-list-item-meta>

        </a-list-item>
      </template>
    </a-list>

  </main>
</template>

<script>
export default {
  data() {
    return {
      comments: [{
        comment: 'oi',
        name: 'Patrick'
      }],
      formState: {
        comment: '',
      },
      rules: {
        comment: [
          { required: true, message: 'Digite o seu comentário', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.formRef.validate().then((valid) => {
        if (valid) {
          console.log(this.formState);
          // enviar para api
          // api vai retornar um id
          const id = 123
          this.$router.push(`/help-desk/${id}`)
        } else {
          console.log('Erro de validação!');
        }
      }).catch((error) => {
        console.error('Erro na validação:', error);
      });
    }
  }
}
</script>

<style scoped>

.comments {
  margin-top: 30px
}
</style>