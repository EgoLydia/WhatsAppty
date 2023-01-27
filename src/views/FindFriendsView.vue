<template>
    <div class="pt-[100px] overflow-auto fixed h-[100vh] w-full" id="FindFriends">
        <div class="flex w-full p-4 items-center cursor-pointer">
            <img class="rounded-full mr-4 w-12" src="http://random.imagecdn.app/100/100" alt="" />
            <div class="w-full">
                <div class="flex justify-between items-center">
                    <div class="text-[15px] text-gray-600">Frank</div>
                </div>
                <div class="flex items-center">
                    <div class="text-[15px] text-gray-500">Hi, I'm using WhatsAppty!</div>
                </div>
            </div>
        </div>
        <div class="border-b w-[calc(100%-80px)] float-right"></div>
    </div>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';
import { useUserStore } from '../store/user-store'
import { ref } from 'vue';

const userStore = useUserStore();
const { sub, userDataForChat, allUsers, removeUsersFromFindFriends } = storeToRefs(userStore);
const hideMe = (user) => {
    if (user.sub === sub.value) {
        return false
    }
    return true
}
const createNewChat = (user) => {
    userDataForChat.value = []
    userDataForChat.value.push({
        id: '',
        sub1: sub.value,
        sub2: user.sub,
        picture: user.picture,
        firstName:user.firstName,  
    })
}
</script>

<style lang="scss" scoped>

</style>