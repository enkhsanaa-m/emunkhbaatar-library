<template>
    <h1>Book counter</h1>
    <div>
        <button @click="getBookCount">Get Book Count</button>
        <p v-if="count !== null"> Total number of books: {{ count }} </p>
        <p v-if="error"> {{ error }}</p>
    </div>
</template>

<script setup>
import {ref} from 'vue'; 

import axios from 'axios';
const count = ref(null)
const error = ref('')

const getBookCount = async () => {
    try {
        const response = await axios.get('https://countbooks-evhntix4bq-uc.a.run.app');
        count.value = response.data.count;
        error.value = null;
    } catch (err) {
        console.error('error fetching book count', err);
        error.value = err;
        count.value = null;
    }
} 
</script>