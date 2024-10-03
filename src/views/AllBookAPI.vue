<template>
    <h1>AllBook API API</h1>
    <pre>
        {{ jsondata }}
    </pre>
</template>

<script setup>
import {ref, onMounted } from 'vue'; 

import axios from 'axios';
const jsondata = ref(null)
const error = ref('')

const getAllBook = async () => {
    try {
        const response = await axios.get('https://getallbooks-evhntix4bq-uc.a.run.app');
        jsondata.value = response.data;
        error.value = null;
    } catch (err) {
        console.error('error fetching book count', err);
        error.value = err;
        jsondata.value = null;
    }
} 
onMounted(() => {
    getAllBook();
})

</script>