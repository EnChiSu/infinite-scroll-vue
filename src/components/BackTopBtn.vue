<template>
    <div class='top__btn__container'>
            <button
                class='top__btn'
                @click="handleClick()"
            ></button>
        </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$emit('back-to-top')
        },
    },
}
</script>
<style scoped>
.top__btn__container {
    position: fixed; 
    width: 100%;
    left: 90%;
    bottom: 80px;
    height: 20px;
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: orange;
}

.top__btn {
    background: orange;
    text-decoration: none;
    border-radius: 50%;
    display: block;
    height: 60px;
    width: 60px;
    border: none;
    cursor: pointer;
}

.top__btn::after {
    content:"\2B9D";
    display: block;
    color: white;
    font-weight: bold;
    font-size: 35px;
    text-align: center;
    padding-bottom: 5px;
}
</style>


