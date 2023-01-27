<template>
    <div class="ml-[420px] w-full">
        <div class="w-full">
            <div id="bg">

            </div>
            <div class="border-l border-green-500 w-full">
                <div class="
            bg-[#f0f0f0]
            fixed
            z-10
            min-w-[calc(100vw-420px)]
            flex
            justify-between
            items-center
            px-2
            py-2
          ">
                    <div class="flex items-center">
                        <img class="rounded-full mx-1 w-10" src="http://random.imagecdn.app/100/100" alt="" />
                        <div class="text-gray-900 ml-1 font-semibold">Frank</div>
                        <DotsVerticalIcon fillColor="#515151" class="" />
                    </div>
                </div>

                <div id="MessagesSection" class="
                    pt-20
                    pb-8
                    z-[-1]
                    h-[calc(100vh-65px)]
                    w-[calc(100vw-420px)]
                    overflow-auto
                    fixed
                    touch-auto
                ">
                    <div class=" px-20 text-sm">

                        <div class=" flex w-[calc(100%-50px)]">
                            <div class=" inline-block bg-white p-2 rounded-md my-1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nobis,
                                accusantium dignissimos consequatur reprehenderit aliquid accusamus harum corporis qui
                                quasi, quis excepturi nesciunt hic,
                                asperiores neque repellendus aspernatur tempora esse!
                            </div>
                        </div>

                        <div class=" flex w-[calc(100%-50px)] justify-end space-x-1 float-right">
                            <div class=" inline-block bg-green-200 p-2 rounded-md my-1">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis nobis,
                                accusantium dignissimos consequatur reprehenderit aliquid accusamus harum corporis qui
                                quasi, quis excepturi nesciunt hic,
                                asperiores neque repellendus aspernatur tempora esse!
                            </div>
                        </div>

                    </div>
watch(() => currentChat.value, (chat) => {
    if (chat.length) {
        setTimeout(() => {
            let objDiv = document.getElementById('MessagesSection')
           objDiv.scrollTop = objDiv.scrollHeight
        }, 50)
    }
}, { deep: true })

                    <div class="w-[calc(100vw-420px)] p-2.5 z-10 bg-[#f0f0f0] fixed bottom-0">
                        <div class="flex items-center justify-center">
                            <EmoticonExcitedOutlineIcon :size="27" fillColor="#515151" class="mx-1.5" />
                            <PaperclipIcon :size="27" fillColor="#515151" class="mx-1.5 mr-3" />

                            <input type="text" class="
                mr-1
                shadow
                appearance-none
                w-full
                py-3
                px-4
                text-gray-700
                leading-tight
                focus:outline-none focus:shadow-outline
                rounded-lg
              " autocomplete="off" placeholder="Message" />

                            <button class="ml-3 p-2 w-12 flex justify-center item-center">
                                <SendIcon fillColor="#515151" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import DotsVerticalIcon from "vue-material-design-icons/DotsVertical.vue";
import SendIcon from "vue-material-design-icons/Send.vue";
import EmoticonExcitedOutlineIcon from "vue-material-design-icons/EmoticonExcitedOutline.vue";
import PaperclipIcon from "vue-material-design-icons/Paperclip.vue";
</script>

<style scoped>
#bg {
    background: url('/message-bg.png') no-repeat center;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
}
</style>