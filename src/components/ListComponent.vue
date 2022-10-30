<template>
    <div class="scroll__component" ref="scrollComponent">
        <post-component v-for="(image, index) in images" :key="index" :image="image"/>
        <div id="spinner" v-if="isLoading"></div>
    </div>
</template>

<script>
import PostComponent from './PostComponent.vue'
import { ref } from 'vue'
import getPosts from '../api/get-post'
import getImages from '../api/get-images'

export default {
    components: {
		PostComponent,
	},    
    data() {
        return {
            images: [
                {
                    "id":"0",
                    "author":"Alejandro Escamilla",
                    "width":5616,
                    "height":3744,
                    "url":"https://unsplash.com/photos/yC-Yzbqy7PY",
                    "download_url":"https://picsum.photos/id/0/5616/3744"
                },
                {
                    "id":"1",
                    "author":"Alejandro Escamilla",
                    "width":5616,
                    "height":3744,
                    "url":"https://unsplash.com/photos/LNRyGwIJr5c",
                    "download_url":"https://picsum.photos/id/1/5616/3744"
                }
            ],
            pages: 2,
            isLoading: false,
        };
    },
    methods: {
        async loadMorePosts() {
            this.isLoading = true;
            let newImages = await getImages(this.pages,2)
                .then((imageData) => {
                    setTimeout(() => {
                        this.isLoading = false;
                    }, 6000)
                    return imageData;
                })
                .catch((err) => {
                    console.log(err);
                })
            this.images.push(...newImages);
        },
        handleScroll() {
            let element = this.$refs.scrollComponent;
            if (element.getBoundingClientRect().bottom < (window.innerHeight * 0.99)) {
                this.loadMorePosts()
                this.pages+=1;
            }
        },
    },
    mounted() {
        this.posts = ref(getPosts(10))
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}
</script>
<style lang="scss" scoped>
.scroll__component {
    padding: 0;
    margin: 0;
    width: 100%;
}
h1 {
  font: 2em 'Roboto', sans-serif;
  margin-bottom: 40px;
}
#spinner {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-bottom: 20px;
  border: 5px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>


