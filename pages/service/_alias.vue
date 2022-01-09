<template>
    <div>
        {{ $route.params.alias }}
        <NuxtLink :to="{ name: 'service-alias', params: { alias: 'хуй' } }"> ХУЙ </NuxtLink>
        <div v-for="i in 8" :key="i" class="" />
    </div>
</template>

<script>
export default {
    layout: 'default',
};
</script>

<style scoped lang="scss">
div {
    color: #eea135;
}
</style>
