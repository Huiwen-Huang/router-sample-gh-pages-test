<template>
    <div>動態路由請見 console.log</div>
</template>

<script>
// 將axios載入
import axios from 'axios'

export default {
  created () {
    const id = this.$route.params.id
    // 在生命週期取得遠端資料
    axios.get(`https://randomuser.me/api/?seed=${id}`)
      .then((res) => {
        console.log(res)
      })
  }
}
</script>
