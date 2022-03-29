<template>
    <v-app app dark>
      <v-main>
        <v-container fluid class="empty-wrap">
            <nuxt/>  
        </v-container>
      </v-main>
    </v-app>
</template>
<script>
export default {
  name: "empty"
}
</script>

<style lang="scss">
  .empty {
    &-wrap {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
</style>