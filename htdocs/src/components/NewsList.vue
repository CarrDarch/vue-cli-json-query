<template>

    <div class="news-list">
        <div v-if="results.length > 1">
            <div v-for="result in results" :key="result.id">
                <pre>{{ result.acf.development_name }}</pre>
                <img :src="result.acf.icon_link_3_image_small.url" alt="">
            </div>
        </div>
        
        <div v-else>
            <h1>
                {{results.title.rendered}}
            </h1>
            <img :src="results.acf.icon_link_3_image_small.url" alt="">
        </div>
    </div>
</template>


<script>
import axios from 'axios'

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const SeddonURL = "https://www.seddonhomes.co.uk/wp-json/wp/v2/pages/15883";
const SeddonLocalURL = "http://dev.seddonhomes.local/wp-json/wp/v2/pages/";
const SeddonLocalACFURL = "http://dev.seddonhomes.local/wp-json/wp/v2/development/";
const ApiKey = "ade9e2bb7b8a46d08b3f315431baa2f5";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

export default {
    name: 'NewsList',
    data() {
        return {
            results: [],
            acf: [],
            errors: [],
            section: 'home'
        }
    },
    mounted () {
        //this.getPosts('home')
        this.wpGet(SeddonLocalACFURL)
        //axios.get('http://dev.seddonredesign.local/wp-json/wp/v2/pages/15535')
        //axios.get('http://dev.seddonredesign.local/wp-json/wp/v2/pages/15535')
        //.then(response => {this.results = response.data.results})
    },
    methods: {
        getPosts(section) {
            let url = buildUrl(section);
            axios.get(url).then((response) => {
                this.results = response.data.results;
            }).catch(
                error => { 
                    this.errors = response.data.error;
                    console.log(error); 
            });
        },
        wpGet(url) {
            
            axios.get(url).then((response) => {
                this.results = response.data;
            }).catch(
                error => { 
                    this.errors = response.data;
                    console.log(error); 
            });
        }
    }
}
</script>

<style lang="scss">
    pre {
        text-align: left;
    }
</style>
