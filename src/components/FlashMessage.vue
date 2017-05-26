<template>
    <div v-bind:class="classObject" v-if="canShowFlashMessage" class="alert alert-dismissable">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <p><i class="fa fa-warning"></i> {{ flashMessage.message  }} </p>
    </div>

</template>

<script>
    import { mapState } from 'vuex'

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
        }
    }
</script>
