<template>
  <main>

    <a-page-header title="Crachá" /> 


    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Frente">
        <div class="base-badge">
          <div class="header"></div>
          <div class="content">
            <div class="avatar">
              <img src="https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png" alt="" class="src">
            </div>
            <div class="name">Patrick Magalhaes</div>
          </div>
          <div class="footer"></div>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Verso">
        <div class="base-badge back">
          <ul>
            <li><b>Nome:</b> Patrick</li>
            <li><b>E-mail:</b> Patrick</li>
            <li><b>Telefone:</b> Patrick</li>
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
      activeKey: '1'
    }
  }
}
</script>

<style scoped>
  .base-badge {
    width: 200px;
    height: 300px;
    border: 1px solid red;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .back {
    background: orange;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header, .footer {
    background: orange;
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