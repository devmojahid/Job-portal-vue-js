<template>
	<div>
		<div class="box" v-for="post in posts" :key="post.id">
			<h1 class="title is-5">{{post.title}}</h1>
			<p class="is-title">{{post.body}}</p>
			<div class="buttons">
				<button class="button is-primary">New Post</button>
				<button class="button is-danger">Delete Post</button>
			</div>
		</div>
		
	

	</div>
</template>


<script>
	export default{
		data(){
			return{
				posts:[]
			}
		},
		created(){
			fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res=>res.json())
			.then(data=>{
				this.posts = data
			})
		}
	}
</script>

<style>

</style>