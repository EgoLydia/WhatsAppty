<template>
  <router-view />
</template>

<script setup>
import { useUserStore } from './store/user-store'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue';
const userStore = useUserStore();
const router = useRouter();

</script>
