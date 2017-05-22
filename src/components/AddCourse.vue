<template>
    <div>
        test
    </div>
</template>

<script>
    import { fbDatabase } from '@/configs/firebase'
    export default {
        mounted() {
            let coursesDb = fbDatabase.ref('courses/')
        }
    }
</script>
