<template>
  <div id="app">
    <HeadComp></HeadComp>
    <router-view :scores="scores" :pushScore="pushScore" :resetStorage="resetStorage"></router-view>
  </div>
</template>

<script>
import HeadComp from '@/components/HeadComp'
import JankenComp from '@/components/JankenComp'
import ScoresComp from '@/components/ScoresComp'
export default {
  name: 'App',
  data () {
    return {
      scores: []
    }
  },
  created () {
    this.setScore()
  },
  methods: {
    pushScore (msg) {
      this.scores.push(msg)
      localStorage.setItem('scores', JSON.stringify(this.scores))
    },
    setScore () {
      this.scores = JSON.parse(localStorage.getItem('scores')) || []
    },
    resetStorage () {
      localStorage.removeItem('scores')
      this.scores = []
    }
  },
  components: {
    HeadComp,
    JankenComp,
    ScoresComp
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style: none;
  padding: 0;
}

.btn {
  position: relative;
  display: inline-block;
  padding: 0.25em 0.5em;
  text-decoration: none;
  color: #fff;
  background: #03a9f4; /*色*/
  border: solid 1px #0f9ada; /*線色*/
  opacity: 0.3;
  border-radius: 4px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2);
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
}

.btn,
.subBtn {
  font-weight: bold;
  font-size: 25px;
}

.btn:active {
  /*押したとき*/
  border: solid 1px #03a9f4;
  box-shadow: none;
  text-shadow: none;
}

.btn:focus,
.subBtn:focus {
  outline: none;
}

.selectedBtn,
.router-link-active {
  background: #03a9f4; /*色*/
  border: solid 1px #0f9ada; /*線色*/
  opacity: 1;
}

.subBtn {
  display: inline-block;
  padding: 0.3em 1em;
  text-decoration: none;
  color: #67c5ff;
  opacity: 0.5;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: 0.4s;
}

.subBtn:hover {
  opacity: 1;
  background: #03a9f4;
  color: white;
}
</style>
