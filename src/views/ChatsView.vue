<template>
    <div id="Messages" class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)]">
        <div v-for="chat in chats" :key="chat">
            <div @click="openChat(chat)">
                <MessageRowComponent :chat="chat" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from '@vue/runtime-core';
import { storeToRefs } from 'pinia';
import MessageRowComponent from '../components/MessageRowComponent.vue';
import { useUserStore } from '../store/user-store';

const userStore = useUserStore();

const { userDataForChat, chats, sub } = storeToRefs(userStore)

onMounted(async () => {
    if (userDataForChat.value.length) {
        await userStore.getChatById(userDataForChat.value[0].id)
    }
})

const openChat = async (chat) => {
    userDataForChat.value = []
    userDataForChat.value.push({
        id: chat.id,
        sub1: chat.sub1,
        sub2: chat.sub2,
        firstName: chat.user.firstName,
        lastName: chat.user.lastName,
        picture: chat.user.picture,
    })
    try {
        await userStore.getChatById(chat.id)
        let data = {
            id: chat.id,
            key1: 'sub1HasViewed', val1: false,
            key2: 'sub2HasViewed', val2: false,

        }
        if (chat.sub1 == sub.value) {
            data.val1 = true
            data.val2 = true
        }else if (chat.sub2 == sub.value) {
            data.val1 = true
            data.val2 = true
        }
        await userStore.hasReadMessage(data)
    } catch (e) {
        console.log(e);
    }
}
</script>

<style lang="scss" scoped>

</style>