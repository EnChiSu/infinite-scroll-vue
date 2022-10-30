<template>
    <div class="post" >
        <img :src="image.download_url" alt="Italian Trulli" class="post__image"/>
        <div class="post__author">
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
</style>