<template>
    <div>
        <div class="message-system" v-if="name === 'admin'">
            <p class="text-xs-center text-md-center">{{text}}</p>
        </div>
        <div class="message-wrap" v-else :class="{owner}">
            <p>{{name}}</p>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        text: String,
        owner: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
    .message {
        &-wrap {
            display: flex;
            width: 60%;
            flex-direction: column;
            padding: 15px;
            background: #0101cc;
            border-radius: 5px;
            margin-bottom: 30px;
        }
    }
    .owner {
        margin-left: auto;
        background: #fff;
        color: #000;
    }
</style>