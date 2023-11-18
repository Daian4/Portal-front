<template>
  <main v-if="ticket">
    <a-page-header :title="ticket.title" />

    <p>{{ ticket.description }}</p>

    <a-divider>Comentários</a-divider>

    <a-form ref="formRef" :model="formState" :rules="rules">
      <a-form-item ref="message" label="Comentario" name="message">
        <a-textarea v-model:value="formState.message" />
      </a-form-item>

      <a-button type="primary" @click="onSubmit">Comentar</a-button>
    </a-form>

    <a-list
      class="comments"
      :loading="initLoading"
      item-layout="horizontal"
      :data-source="comments"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta :description="item.message">
            <template #title>
              <a href="#">{{ item.user.name }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.user.image" />
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
      comments: [],
      formState: {
        comment: ''
      },
      rules: {
        comment: [{ required: true, message: 'Digite o seu comentário', trigger: 'blur' }]
      },
      ticket: null
    }
  },
  created() {
    this.fetchTickets()
    this.fetchComments()
  },
  methods: {
    onSubmit() {
      this.$refs.formRef
        .validate()
        .then(async (valid) => {
          if (valid) {
            try {
            const response = await this.$axios.post(`/tickets/${this.$route.params.id}/comments`, this.formState)
            this.comments.push(response.data)
            this.$refs.formRef.resetFields();
          } catch (err) {
            console.log(err)
          }
            this.$refs.formRef.resetFields()
          } else {
            console.log('Erro de validação!')
          }
        })
        .catch((error) => {
          console.error('Erro na validação:', error)
        })
    },
    async fetchTickets() {
      try {
        const response = await this.$axios.get(`/tickets/${this.$route.params.id}`)
        this.ticket = response.data
      } catch (error) {
        console.log(error)
      }
    },
    async fetchComments() {
      try {
        const response = await this.$axios.get(`/tickets/${this.$route.params.id}/comments`)
        this.comments = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.comments {
  margin-top: 30px;
}
</style>
