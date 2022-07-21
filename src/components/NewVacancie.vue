<template>
	<div>
		<div class="box">
			<h1 class="title is-5">Create a vacancie</h1>
			<form @submit.prevent="handleForm">
				<input v-model="form.title" class="input" type="text" placeholder="Job Title" required>
				<input v-model="form.company" class="input" type="text" placeholder="Company Name" required>
				<input v-model="form.city" class="input" type="text" placeholder="City Name" required>
				<textarea v-model="form.description" class="textarea" placeholder="Job Description" required></textarea>
				 <button class="button is-primary">Create</button>
			</form>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				form: {
					title:'',
					company:'',
					city:'',
					description:'',
				}
			}
		},
		methods:{
			handleForm(){
				this.$emit('saveFormData',{...this.form , id: new Date().getTime().toString()})
				for (let key in this.form) {
                    this.form[key] = '';
                }
			}
		}
	}
</script>

<style scoped>
	input,textarea {
		margin-bottom:10px;
	}
</style>