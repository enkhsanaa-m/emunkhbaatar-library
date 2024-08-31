<template>
    <div class = "container mt-5">
        <h1 v-if="!isAuthenticated">Login</h1> 
        <form v-if="!isAuthenticated" @submit.prevent="handleLogin">
            <div class = "row">
                <div class = "col">
                    <label for="username" class="form-label" >Username</label>
                    <input type="text" class="form-control" id="userame" v-model="username" />
                </div>
            </div>
            <div class ="row">
                <div class = "col">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" v-model="password" />
                </div>
            </div>
            <div class ="row">
                <div class = "col">
                    <button type = "submit" class ="btn btn-primary" >Login</button>
                    <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
                </div>
            </div>
        </form>
        <h1 v-if="isAuthenticated">Hi test user</h1> 
        <button v-if="isAuthenticated" @click="handleLogout" class="btn btn-primary mt-3">Logout</button>
    </div>
</template>

<script> 
import {mapActions} from 'vuex';
import {mapState} from 'vuex';

export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    computed: {
        ...mapState(['isAuthenticated', 'error']),
    },
    methods: {
        async handleLogin() {
            const user = {username:this.username, password: this.password};
            try {
                await this.$store.dispatch('login',user);
                this.$router.push({name:'Home'});
            } catch (error) {
                console.error('Login failed', error);
            }
        },
        async handleLogout() {
            try {
                await this.$store.dispatch('logout');
                this.$router.push({name:Login});
            } catch (error) {
                console.error('Logout failed', error)
            }
        },
    },
};
</script>

<style> 
</style>