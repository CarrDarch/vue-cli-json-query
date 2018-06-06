<template>
    <div class="develoments-list">
        <button v-for="(result, index) in results" v-if="result.acf.icon_link_3_image_small.url" :key="index" v-on:click="updateID(index)"> {{result.acf.development_name}} </button>

        <div class="development-plan">
            
            <!-- <h1> {{results[selected].acf.development_name}} </h1> -->
            <!-- <img :src="results[selected].acf.icon_link_3_image_small.url" /> -->
        </div>

        <div v-for="(developmentPlan, index) in developmentPlans">
            <!-- <pre> {{developmentPlan}} </pre> -->
            <img v-if="developmentPlan[selected].acf.development_map.url" :src="developmentPlan[selected].acf.development_map.url" alt="">
        </div>
    </div>

    
</template>


<script>
import axios from 'axios'

const SeddonDevlopmentsAll = "http://dev.seddonhomes.local/wp-json/wp/v2/development/";
const SeddonDevlopmentsPlans = "http://dev.seddonhomes.local/wp-json/wp/v2/development_plan/";

export default {
    data() {
        return {
            results: [],
            selected: '',
            errors: [],
            developmentPlans: []
        }
    },
    mounted () {
        this.wpGet(SeddonDevlopmentsAll),
        this.developmentPlanLoop(SeddonDevlopmentsPlans)
    },
    methods: {
        wpGet(url) {
                
            axios.get(url).then((response) => {
                this.results = response.data;
            }).catch(
                error => { 
                    this.errors = response.data;
                    console.log(error); 
            });
        },
        developmentPlanLoop(url) {
                
            axios.get(url).then((response) => {
                this.developmentPlans = response.data;
            }).catch(
                error => { 
                    this.errors = response.data;
                    console.log(error); 
            });
        },
        updateID(id) {
            this.selected = id
            console.log(id);
        }
    }
    
}
</script>


<style lang="scss">
    pre {
        text-align: left;
        float: left;
    }
</style>
