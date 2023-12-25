<script setup lang="ts">
import NavigationHeader from "../components/NavigationHeader.vue";
</script>

<template>
    <NavigationHeader text="Portfolio" path="/" />
    <div class="sort-container">
        <h2>
            Sort by Tags
        </h2>
        <div class="tag-select-box"></div>
    </div>
</template>

<style scoped>
.left {
    display: flex;
    justify-content: left;
    align-items: center;
    height: 10vh;
}

.sort-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 3vw;
}

h2 {
    font-family: 'bree';
    font-size: 2.6vh;
}

.tag-select-box {
    width: 20vw;
    height: 70vh;
    background-color: #000000;
}
</style>