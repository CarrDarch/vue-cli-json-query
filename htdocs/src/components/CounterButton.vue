<template>
    <div class="counter">
		<button class="btn btn-primary" v-on:click="counter++">You clicked the counter {{counter}} times! </button>
	</div>
</template>


<script>
export default {
    data() {
        return {
            counter: 0
        }
    }
}
</script>
