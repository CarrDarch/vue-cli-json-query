<template>
    <div class="input">
		<h2 class="input-text" v-text="input_val"></h2>
		<input type="text" v-model="input_val">
	</div>
</template>


<script>
    export default {
        data() {
            return {
                input_val: ''
            }
        }
    }
</script>