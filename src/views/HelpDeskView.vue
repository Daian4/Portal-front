<template>
  <main>
    <a-page-header title="Meus chamados">
      <template #extra>
        <router-link :to="{ name: 'help-desk-new' }">
          <a-button type="primary">Abrir chamado</a-button>
        </router-link>
      </template>
    </a-page-header>
    <div>
      <a-table :columns="columns" :data-source="tickets" bordered>
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.dataIndex === 'name'">
            <a>{{ text }}</a>
          </template>
          <template v-else-if="column.dataIndex === 'operation'">
            {{ text }}
            <router-link :to="'/help-desk/' + record.id"><a>Ver</a></router-link>
          </template>
        </template>
      </a-table>
    </div>
  </main>
</template>

<script setup>
const columns = [
  {
    title: 'Titulo',
    dataIndex: 'title'
  },
  {
    title: 'Status',
    dataIndex: 'status'
  },
  {
    title: 'Data',
    dataIndex: 'date_creation'
  },
  {
    title: 'Ação',
    dataIndex: 'operation'
  }
]
</script>

<script>
export default {
  data() {
    return {
      tickets: []
    }
  },
  created() {
    this.fetchTickets()
  },
  methods: {
    async fetchTickets() {
      try {
        const response = await this.$axios.get('/tickets')
        this.tickets = response.data
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
