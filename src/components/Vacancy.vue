<template>
	<div class="box mt-5">
		<h1 class="title is-5">{{vacancy.title}}</h1>
		<span>{{vacancy.company}}</span>
		<p>{{vacancy.city}}</p>
		<div class="block"></div>
		<p>{{vacancy.description}}</p>
		<div class="buttons mt-4">
			<button class="button is-primary">Apply</button>
			<button class="button is-danger">Delete</button>
		</div>
		

	</div>
</template>


<script>
	export default{
		props:{
			vacancy:{
				type : Object,
				required: true
			}
		}
	}
</script>

<style>

</style>