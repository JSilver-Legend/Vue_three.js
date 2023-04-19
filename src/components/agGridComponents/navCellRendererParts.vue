<template>
    <div class="relative bg-sidebar h-full w-full hover:bg-gray-700">
<!--        <img :src="props.params.value" style="margin-bottom: 20px;"/>-->
        <div class="absolute top-2 left-3 text-white text-12 font-bold">{{props.params.data.oem}}</div>
        <div class="absolute bottom-1 left-3 text-white text-10">{{props.params.data.articleNumber}}</div>
        <div class="absolute top-7 left-3 text-amber-400 text-11 ">{{props.params.data.model}}</div>
    </div>
</template>
<script>
export default {
    setup(props) {
        return { props }
    },
}
</script>>
