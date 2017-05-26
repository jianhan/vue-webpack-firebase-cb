<template>
    <div v-bind:class="classObject" v-if="canShowFlashMessage" class="alert alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true" @click="unsetFlashMessage">×</button>
        <p v-if="typeof flashMessage.message == 'string'">{{ flashMessage.message }}</p>
        <ul v-else>
            <li v-for="message in flashMessage">
                {{ message }}
            </li>
        </ul>
    </div>

</template>

<script>
    import { mapState } from 'vuex'
    import { mapMutations } from 'vuex'
    import * as types from '@/store/mutation-types'

    export default {
        data: function() {
            return {}
        },
        computed: {
            classObject: function () {
                return {
                    'alert-warning' : this.flashMessage.type == 'warning',
                    'alert-success' : this.flashMessage.type == 'success',
                    'alert-info' : this.flashMessage.type == 'info',
                    'alert-danger' : this.flashMessage.type == 'danger'
                }
            },
            canShowFlashMessage() {
                return this.flashMessage !== null
            },
            ...mapState({
                flashMessage : 'flashMessage'
            })
        },
        methods: {
            unsetFlashMessage() {
                this.$store.commit(types.UNSET_FLASH_MESSAGE)
            }
        }
    }
</script>
