<template>
    <div class="post" >
        <img :src="image.download_url" alt="Italian Trulli" class="post__image"/>
        <div class="post__author">
            <svg
                class="post__icon"
                viewBox="0 0 500 500" 
                xmlns="http://www.w3.org/2000/svg"
                @click="handleClick"
                :style="active ? 'fill: orange;' : 'fill: #000000;'"
            >
                <path fill-rule="evenodd" d="M2,228.5a19,19 0 01 19-19h91a19,19 0 01 19,19v201a19,19 0 01-19,19h-91a19,19 0 01-19-19zM41.5,389.5a20,20 0 01 40.5,0a20,20 0 01-40.5,0z" />
                <path d="M151.5,229a19,19 0 01 19-19c15.5-4,35.5-30,83.5-90c24-24,19-62,34-91c8-15,17-20,32-17.5c60,0.5,78,73.5,47,132.5c-8,14-10,16-13,26.5l91,0.5c53,7,72,64,37.5,106c8.5,23,6.5,42-8.5,67c7,21,0,47-16.5,65c2.5,46-17.5,76-70.5,80h-51c-66-3-140-38-165.5-40a19,19 0 01-19-19z" />
            </svg>
            <span class="post__author__title">Author:</span>
            <span class="post__author__name">{{ image.author }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: Object,
        image: Object
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
        handleClick() {
            this.active = !this.active;
        }
    },
}
</script>
<style scoped>
.post {
    padding: 1.5em;
    display: flex;
    flex-direction: column;
}
.post:not(:last-child) {
    margin-bottom: 10px;
}
.post:last-child {
    margin-bottom: 100px;
}
.post__image {
    width: 70%;
    margin: auto;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
}
.post__author {
    display: inline-block;
    padding: 10px 0;
    width: 70%;
    margin: auto;
    border-bottom-left-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
    font-family: 'roboto';
    background: white;
}
.post__title {
    color: grey;
    padding-right: 5px;
    font-weight: bold;
}
.post__name {
    color: black;
}
.post__icon {
    width: 25px;
    float: right;
    margin-right: 20px;
    vertical-align: middle;
}
</style>