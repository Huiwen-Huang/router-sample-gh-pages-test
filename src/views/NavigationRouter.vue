<template>
    <h2 class="mb-4">路由方法介紹</h2>
    <div class="d-flex justify-content-center mb-4">
        <button type="button" class="btn btn-secondary me-3" @click="getRoute">getRoute</button>
        <button type="button" class="btn btn-secondary mx-3" @click="push">push</button>
        <button type="button" class="btn btn-secondary mx-3" @click="replace">replace</button>
        <button type="button" class="btn btn-secondary mx-3" @click="go">go</button>
    </div>
    <div class="d-flex justify-content-center">
        <button type="button" class="btn btn-secondary mx-3" @click="addRoute">addRoute</button>
        <router-link class="btn btn-secondary" to="/newHome">newRoute</router-link>
    </div>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    push () {
      this.$router.push('/about')
    },
    // 沒有歷史紀錄
    replace () {
      this.$router.replace({
        name: 'about'
      })
    },
    // 操作歷史紀錄
    go () {
      this.$router.go(-1)
    },
    getRoute () {
      console.log(this.$route.fullPath)
    },
    addRoute () {
      this.$router.addRoute({
        path: '/newHome',
        name: 'newHome',
        component: () => import('../views/HomeView.vue')
      })
    }
  }
}
</script>
