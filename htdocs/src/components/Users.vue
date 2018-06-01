<template>
    <div class="users">
		<ul>
			<li v-for="user in users">
				{{user.firstname}} {{user.lastname}}
			</li>
		</ul>
	</div>
</template>


<script>
export default {
    name: 'Users',
    data() {
        return {
            users: [
                {firstname: 'Sebastian', lastname: 'Eschweiler'},
                {firstname: 'Bill', lastname: 'Smith'},
                {firstname: 'John', lastname: 'Porter'}
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    .users {
        overflow: hidden;
        text-align: center;
        margin: 0 auto;
        width: 15%;
        ul {
            list-style: none;
            
            li {
                display: inline-block;
                float: left;
                margin-right: 10px;
            }
        }
        
    }
</style>
