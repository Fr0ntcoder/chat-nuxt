export const state = () => ({
    user: {},
    messages: [],
    users: []
})
export const mutations = {
    SET_USER(state,user) {
        state.user = user 
    },
    CLEAR_DATA(state) {
        state.user = {}
    },
    SOCKET_newMessage(state,message) {
        state.messages.push(message)
    },
    SOCKET_updateUsers(state,users) {
        state.users = users;
    }
}