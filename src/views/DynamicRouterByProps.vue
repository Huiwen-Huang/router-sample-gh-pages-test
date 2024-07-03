<template>
    <div>動態路由請見 console.log</div>
</template>

<script>
// 將axios載入
import axios from 'axios'

export default {
  props: ['id'],
  created () {
    const seed = this.id
    // 在生命週期取得遠端資料
    axios.get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res)
      })
  }
}
</script>
