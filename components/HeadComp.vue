<template>
  <div>
    <h1>{{title}}</h1>
    <ul class="nav">
      <li>
        <router-link to="/janken" class="btn navBtn">ゲーム</router-link>
      </li>
      <li>
        <router-link to="/scores" class="btn navBtn">成績</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'headComp',
  data () {
    return {
      title: 'ジャンケンゲーム'
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
}

.nav > li + li {
  margin-left: 24px;
}

.nav a {
  text-decoration: none;
}
</style>
