<template>
	<div>
		<div class="hero">
			<section class='hero'>
				<div class="hero-body">
					<p class="title">
						Find Your dream Job
					</p>
					<p class="subtitle">
						Apply For any vacancies below
					</p>
				</div>
			</section>
		</div>
		<div class="newVacancie">
			<NewVacancie @saveFormData="saveForm" />
		</div>

		<div class="vacancy">
			<Vacancy v-for="vacancy in vacancies" :key="vacancy.id" :vacancy='vacancy' />
		</div>
	</div>
</template>


<script>
import NewVacancie from '../components/NewVacancie.vue'
import Vacancy from '../components/Vacancy.vue'
import {vacancies} from "../../data"
	export default{
		components:{NewVacancie,Vacancy},

		data(){
			return{
				vacancies
			}
		},
		methods:{
			saveForm(formData){
				this.vacancies.unshift(formData)
				console.log(formData);
			}
		}
	}
</script>

<style>

</style>