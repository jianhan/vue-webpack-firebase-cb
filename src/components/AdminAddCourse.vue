<template>
    <form v-on:submit.prevent>
        <label>Name</label>
        <input name="name" v-model="fields.name" />
        <br />
        <label>Location</label>
        <input name="location" v-model="fields.location" />
        <br />
        <button @click="handleAddCourseEvent">Add</button>
    </form>
</template>

<script>
    import firebaseDb from '@/configs/firebase'

    export default {
        data: function() {
            return {
                fields: {
                    name: '',
                    location: ''
                }
            }
        },
        methods: {
            handleAddCourseEvent: function() {
                let key = firebaseDb.ref().child('courses').push().key
                firebaseDb.ref('courses/'+key).set(this.fields)
            }
        },
    }
</script>
