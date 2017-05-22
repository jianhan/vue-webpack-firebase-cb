<template>
    <div id="page-container" class="sidebar-l sidebar-o side-scroll header-navbar-fixed">
        <admin-side-overlay />
        <admin-side-bar />
        <admin-header />
        <!-- Main Container -->
        <main id="main-container">
            <!-- Page Header -->
            <div class="content bg-gray-lighter">
                <div class="row items-push">
                    <div class="col-sm-7">
                        <h1 class="page-heading">
                            Blank <small>That feeling of delight when you start your awesome new project!</small>
                        </h1>
                    </div>
                </div>
            </div>
            <!-- END Page Header -->
            <!-- Page Content -->
            <div class="content">
                <router-view></router-view>
            </div>
            <!-- END Page Content -->
        </main>
        <!-- END Main Container -->
        <admin-footer />
    </div>
    <!-- END Page Container -->
</template>

<script>
    import AdminSideBar from './AdminSideBar'
    import AdminSideOverlay from './AdminSideOverlay'
    import AdminHeader from './AdminHeader'
    import AdminFooter from './AdminFooter'

    export default {
        components: {
            AdminSideBar,
            AdminSideOverlay,
            AdminHeader,
            AdminFooter
        }
    }
</script>
