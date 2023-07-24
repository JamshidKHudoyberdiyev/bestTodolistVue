<template>
    <button>
        <slot>create</slot>
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
button {
    width: 20%;
    height: 100%;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
}
</style>