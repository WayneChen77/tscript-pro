<template>
  <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/rooms">房型旅宿頁</router-link>|
    <router-link to="/roomdetail">房型詳細頁</router-link>|
    <router-link to="/bookroom">預約房型頁</router-link>|
    <router-link to="/checkroom">預約成功</router-link>|
    <router-link to="/member">會員資料</router-link>|
  </nav>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/all.scss"

</style>
