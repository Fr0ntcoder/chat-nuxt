<template>
  <v-app app dark>
    <v-navigation-drawer app v-model="drawer">
        <v-list subheader>
            <v-subheader>Список пользователей</v-subheader>
            <v-list-item
            v-for="u in users"
            :key="u.name"
            >
            <v-list-item-content>
                <v-list-item-title v-text="u.name"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
                <v-icon :color="u.id === user.id ? 'primary' : 'grey'">
                mdi-message-outline
                </v-icon>
            </v-list-item-icon>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-btn icon class="hidden-xs-only" @click="exit()">
            <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title>Чат комнаты {{user.room}}</v-toolbar-title>  
    </v-app-bar>
    <v-main>
      <v-container fluid class="default-wrap">
        <nuxt/>
      </v-container>
    </v-main>
</v-app>
</template>

<script>
import {mapState,mapMutations} from "vuex"
export default {
  data: () => ({
    drawer: true,
  }),
  computed: {
    ...mapState(["user","users"])
  },
  methods: {
    ...mapMutations(["CLEAR_DATA"]),
    exit() {
        this.$socket.emit("userLeft",this.user.id,() => {
            this.$router.push("/?message=leftChat")
            this.CLEAR_DATA()
        })
    }
  }
}
</script>
<style scoped lang="scss">
  .default {
    &-wrap {
      height: 100%;
    }
  }
</style>
