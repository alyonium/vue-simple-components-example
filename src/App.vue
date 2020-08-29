<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <header-row></header-row>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <left-side></left-side>
            </div>
            <div class="col-xs-12 col-sm-6">
                <right-side></right-side>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <footer-row></footer-row>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from './Header.vue'
    import Footer from './Footer.vue'
    import LeftSide from './LeftSide.vue'
    import RightSide from './RightSide.vue'

    export default {
        components: {
            'header-row': Header,
            'footer-row': Footer,
            'left-side': LeftSide,
            'right-side': RightSide,
        }
    }
</script>
