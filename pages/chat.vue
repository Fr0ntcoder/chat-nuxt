<template>
    <div class="chat-wrap">
        <div class="chat-block" ref="block">
            <message v-for="m in messages" :key="m.text" :name="m.name" :text="m.text" :owner="m.id === user.id"/>
        </div>
        <div class="chat-form">
            <chat-form/>
        </div>
    </div>
</template>
<script>
import {mapState} from "vuex"
import message from "@/components/message.vue"
import chatForm from "@/components/chatForm.vue"
export default {
    middleware: ['chat'],
    head() {
        return {
            title: `Комната ${this.user.room}` 
        }
    },
    components: {
        message,chatForm
    },
    computed: {
        ...mapState(["user","messages"])
    },
    watch: {
        messages() {
            setTimeout(() => {
                this.$refs.block.scrollTop = this.$refs.block.scrollHeight
            },0)
        }
    }
}
</script>
<style lang="scss" scoped>
    .chat {
        &-block {
            height: 100%;
        }
        &-wrap {
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        &-list {
            list-style: none;
        }
        &-form {
            width: 100%;
            margin-top: auto;
            background-color: #1d1c1c;
        }
    }
</style>
