<template>
    <section>
        <div>
            pay with silva pay
        </div>
        <div id="buttons-for-merchant" payment-info="">
        </div>
    </section>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute()
onMounted(async () => {
    console.log(route.query)
    const script = document.createElement('script')
    script.setAttribute('src', 'https://res.cloudinary.com/drasjazfx/raw/upload/v1692976234/wycfqymdeaowres16y1r.js')
    document.head.appendChild(script)
})
</script>