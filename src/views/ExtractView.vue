<template>
  <main>
    <a-page-header title="Extrato Mensal" class="title-header">
      <template #extra>
        <a-button type="primary" @click="convertToPdf">Baixar em PDF</a-button>
      </template>
    </a-page-header>
    <div ref="pdfContent" class="responsible-table ">
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
    title: 'Nome',
    dataIndex: 'name'
  },
  {
    title: 'valor',
    className: 'column-money',
    dataIndex: 'money'
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
import htmlToPdf from 'html-to-pdf-js'

export default {
  methods: {
    async convertToPdf() {
      let element = this.$refs.pdfContent
      await htmlToPdf(element).toPdf().save()
    }
  }
}
</script>

<style scoped>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
