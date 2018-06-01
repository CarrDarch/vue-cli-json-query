<template>
    <div class="news-list">
        <div v-for="result in results" :key="result.id">
            <pre>{{ result }}</pre>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = ".json?api-key=ade9e2bb7b8a46d08b3f315431baa2f5";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

export default {
    name: 'NewsList',
    data() {
        return {
            results: [],
            section: 'home'
        }
    },
    mounted () {
        this.getPosts('home');
    },
    methods: {
        getPosts(section) {
            let url = buildUrl(section);
            axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=ade9e2bb7b8a46d08b3f315431baa2f5').then((response) => {
                this.results = response.data.results;
            }).catch( error => { console.log(error); });
        }
    }
}
</script>

<style lang="scss">
    pre {
        text-align: left;
    }
</style>
