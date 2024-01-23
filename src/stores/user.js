import { defineStore } from "pinia";

export default defineStore('User Store', {
    //data
    state: () => ({
        name: "Victor",
        age: 24
    }),
    //computed
    getters: {
        getUserName: (state) => `我的名字是${state.name}`,
    },
    //methods
    actions: {
        updateName() {
            this.state.name = "結輪";
        },
    }

}) 