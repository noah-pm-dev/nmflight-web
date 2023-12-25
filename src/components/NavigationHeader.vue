<script setup lang="ts">
import { Icon } from "@iconify/vue"
defineProps({
    text: String,
    path: String
})
</script>


<template>
    <div class="container">             
        <router-link class="header" :to="path">
            <Icon icon="material-symbols:arrow-back-ios-new-rounded"></Icon>
            <h1>
                {{ text }}
            </h1>
        </router-link>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: left;
    align-items: center;
    margin-left: 1vw;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 11vh;
    text-decoration: none;
    color: black;
    transition: 0.3s;
}

.header:hover {
    scale: 1.09;
}

svg {
    font-size: 5vh;
}

h1 {
    font-family: 'Bree';
    font-size: 10vh;
    margin-left: 2vw;
}
</style>