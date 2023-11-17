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
      <a-table :columns="columns" :data-source="data" bordered>
        <template #bodyCell="{ column, text }">
          <template v-if="column.dataIndex === 'name'">
            <a>{{ text }}</a>
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
    dataIndex: 'name'
  },
  {
    title: 'Status',
    dataIndex: 'status'
  },
  {
    title: 'Data',
    dataIndex: 'date'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '$3.050',
    date: '05/06/2023'
  },
  {
    key: '2',
    name: 'Julie Green',
    money: '$1.256',
    date: '02/05/2022'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '$1.000',
    date: '08/01/2023'
  }
]
</script>

<script>
export default {
  methods: {}
}
</script>
