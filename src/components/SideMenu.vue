<template>
    <div class="sidemenu" >
        <button 
            class="sidemenu__btn" 
            @click="handleNavOpen" 
            :class="{active:navOpen}"
        >
            <span class="top"></span>
            <span class="mid"></span>
            <span class="bottom"></span>
        </button>
        <transition name="translateX">
        <nav v-show="navOpen">
            <div class="sidemenu__wrapper">
                <ul class="sidemenu__list">
                    <li class="sidemenu__item">
                        <a className='nav__text' href="">
                            <span role="img" aria-label="Trending" className='img__icon'>🔥</span>
                            Trending
                        </a>
                    </li>
                    <li class="sidemenu__item">
                        <a className='nav__text' href="">
                            <span role="img" aria-label="Nature" className='img__icon'>🌱</span>
                            Nature
                        </a>
                    </li>
                    <li class="sidemenu__item">
                        <a className='nav__text' href="">
                            <span role="img" aria-label="Food" className='img__icon'>🍜</span>
                            Food
                        </a>
                    </li>
                    <li class="sidemenu__item">
                        <a className='nav__text' href="">
                            <span role="img" aria-label="Activity" className='img__icon'>🚴‍♀️</span>
                            Activity
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            navOpen: false,
        };
    },
    methods: {
        handleNavOpen() {
            this.navOpen = !this.navOpen
        }
    },
}
</script>
<style scoped>
.sidemenu nav {
    width: 20%;
    background: grey;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
}
.sidemenu .sidemenu__btn {
    display: block;
    margin: 20px;
    width: 70px;
    height: 70px;
    background: #383838;
    border-radius: 50px;
    border: none;
    position: fixed;
    z-index: 100;
    appearance: none;
    cursor: pointer;
    outline: none;
}
.sidemenu .sidemenu__btn span {
    display: block;
    width: 30px;
    height: 3px;
    margin: auto;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.4s ease;
}
.sidemenu .sidemenu__btn span.top {
    transform: translateY(-8px);
}
.sidemenu .sidemenu__btn span.bottom {
    transform: translateY(8px);
}
.sidemenu .sidemenu__btn.active .top {
    transform: rotate(-45deg);
}
.sidemenu .sidemenu__btn.active .mid {
    transform: translateX(-20px) rotate(360deg);
    opacity: 0;
}
.sidemenu .sidemenu__btn.active .bottom {
    transform: rotate(45deg);
}
.sidemenu .sidemenu__wrapper {
    padding-top: 150px;
}
.sidemenu .sidemenu__list {
    padding-top: 50px;
    list-style: none;
    padding: 0;
    margin: 0;
}
.sidemenu .sidemenu__item a {
    text-decoration: none;
    line-height: 2em;
    font-size: 1.6em;
    display: block;
    color: white;
    transition: 0.4s ease;
    padding: 15px 0;
}
.sidemenu .sidemenu__item a > span {
    padding-right: 10px;
}
.sidemenu .sidemenu__item a:hover {
    background: lightgrey;
    color: dimgrey;
}
.translateX-enter {
    transform: translateX(-200px);
    opacity: 0;
}
.translateX-enter-active, .translateX-leave-active {
    transform-origin: top left 0;
    transition: 0.2s ease;
}
.translateX-leave-to {
    transform: translateX(-200px);
    opacity: 0;
}
</style>