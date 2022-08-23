<template>

    <div class="container super-container p-0" style="max-width: 100vw;">
        <Navbar/>

        <slot/>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'

</script>
