<template>
    <div class="flex">
        <div id="Header" class="fixed w-[420px]" z-10>
            <div class="bg-[#F0F0F0] w-full flex justify-between items-center px-3 py-2">
                <img class="rounded-full ml-1 w-10" :src="userStore.picture || ''" alt="" />
                <div class="flex items-center justify-center">
                    <AccountGroupIcon fillColor="#515151" class="mr-6" />
                    <DotsVerticalIcon @click="logout" fillColor="#515151" class="cursor-pointer" />
                </div>
            </div>
            <div id="Search" class="bg-white w-full px-2 border-b shadow-sm">
                <div class="
            px-1
            my-2
            bg-[#f0f0f0]
            flex
            items-center
            justify-center
            rounded-md
          ">
                    <MagnifyIcon fillColor="#515151" :size="18" class="ml-2" />
                    <input type="text" class="
              ml-5
              appearance-none
              w-full
              bg-[#f0f0f0]
              py-1.5
              px-2.5
              text-gray-700
              leading-tight
              focus:outline-none
              placeholder:text-sm placeholder:text-gray-500
            " autocomplete="off" placeholder="start a new chat" />
                </div>
            </div>
        </div>

        <div v-if="showFindFriends">
            <ChatsView class="mt-[100px]" />
        </div>
        <div v-else>
            <findFriendsView class=" pt-20" />
        </div>

        <div v-if="open">
            <MessageView />
        </div>
        <div v-else>
            <div class="
          ml-[420px]
          fixed
          w-[calc(100vw-42px)]
          h-[100vh]
          bg-gray-100
          text-center
        ">
                <div class="grid h-screen place-items-center">
                    <div>
                        <div class="w-full flex items-center justify-center">
                            <img width="375" src="w-web-not-loaded-chat.png" alt="" />
                        </div>

                        <div class="text-[32px] text-gray-500 font-light mt-10">
                            WhatsAppty Web
                        </div>
                        <div class="text-[14px] text-gray-600 mt-2">
                            <div>
                                Send and recieve messages withot keeping your phone online
                            </div>
                            <div>
                                Use WhatsAppty on up to 4 linked devices and 1 phone at the same
                                time
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ChatsView from "./ChatsView.vue";
import MessageView from "./MessageView.vue";
import MagnifyIcon from "vue-material-design-icons/Magnify.vue";
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import AccountGroupIcon from "vue-material-design-icons/AccountGroup.vue";
import { ref } from "@vue/reactivity";
import FindFriendsView from './FindFriendsView.vue'
import { useUserStore } from '../store/user-store'
import { useRouter } from 'vue-router'

const router = useRouter();
const userStore = useUserStore()
const open = ref(true);
const showFindFriends = ref(true)

const logout = () => {
    let res = confirm('Are you sure you want to logout?')
    if (res) userStore.logout(); router.push('/login')
}

</script>

<style lang="scss" scoped>

</style>