<template>
    <div id="Messages" class="pt-1 z-0 overflow-auto fixed h-[calc(100vh-100px)]">
        <MessageRowComponent />
    </div>
</template>

<script setup>
import MessageRowComponent from '../components/MessageRowComponent.vue';
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