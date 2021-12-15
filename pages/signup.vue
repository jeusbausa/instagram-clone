<template>
	<div class="bg-gray-100 flex w-full min-h-screen justify-center items-center">
		<div class="xss:w-80 xl:w-96 space-y-4">
			<Card>
				<div slot="card-body">
					<form @submit.prevent="signUp">
						<div class="flex flex-col justify-center items-center w-full space-y-6 p-12">
							<img src="~/assets/images/jeustagram.png" class="w-48" />

							<div class="font-bold text-center text-sm text-gray-600">Sign up to see photos and videos from your friends.</div>
							<div v-if="httpErrorResponse" class="text-xs w-full relative py-3 pl-4 pr-10 text-red-700 bg-red-100 rounded-lg" role="alert">
								<p>{{ httpErrorResponse }}</p>
							</div>
							<button class="bg-blue-600 active:bg-blue-400 text-white text-sm font-semibold p-2 w-full rounded"><i class="fab fa-facebook-square"></i> Log in with Facebook</button>
							<hr class="w-full" />
							<div class="flex flex-col w-full space-y-2">
								<div>
									<input
										@blur="checkEmail"
										type="text"
										v-model="form.email"
										class="w-full outline-none p-2 rounded border border-gray-300 focus:border-gray-400 bg-gray-100 text-gray-600 text-sm"
										placeholder="Email"
									/>
									<div v-if="errorValidation.email.message" class="text-xs text-red-700">
										{{ errorValidation.email.message }}
									</div>
								</div>
								<div>
									<input
										@blur="checkFullName"
										type="text"
										v-model="form.fullName"
										class="w-full outline-none p-2 rounded border border-gray-300 focus:border-gray-400 bg-gray-100 text-gray-600 text-sm"
										placeholder="Full Name"
									/>
									<div v-if="errorValidation.fullName.message" class="text-xs text-red-700">
										{{ errorValidation.fullName.message }}
									</div>
								</div>
								<div>
									<input
										@blur="checkUsername"
										type="text"
										v-model="form.username"
										class="w-full outline-none p-2 rounded border border-gray-300 focus:border-gray-400 bg-gray-100 text-gray-600 text-sm"
										placeholder="Username"
									/>
									<div v-if="errorValidation.username.message" class="text-xs text-red-700">
										{{ errorValidation.username.message }}
									</div>
								</div>
								<div>
									<input
										type="password"
										v-model="form.password"
										@keyup="checkPassword"
										class="w-full outline-none p-2 rounded border border-gray-300 focus:border-gray-400 bg-gray-100 text-gray-600 text-sm"
										placeholder="Password"
									/>
									<div v-if="errorValidation.password.message" class="text-xs text-red-700">
										{{ errorValidation.password.message }}
									</div>
								</div>
								<div class="flex flex-col py-2">
									<button
										type="submit"
										:disabled="!formReady"
										class="flex items-center justify-center bg-blue-400 text-white text-sm font-semibold p-2 rounded cursor-default"
										:class="{
											'bg-blue-600 cursor-pointer': formReady && !loading,
										}"
									>
										<svg width="20" height="20" viewBox="0 0 24 24" fill="none" class="animate-spin mr-2" v-if="loading" xmlns="http://www.w3.org/2000/svg">
											<path
												opacity="0.2"
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
												fill="white"
											/>
											<path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z" fill="white" />
										</svg>

										Sign up
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</Card>
			<Card>
				<div slot="card-body">
					<div class="flex justify-center p-5 space-x-1">
						<div>Have an account?</div>
						<NuxtLink class="text-blue-600" to="/login">Login</NuxtLink>
					</div>
				</div>
			</Card>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	middleware: 'authenticated',
	data() {
		return {
			httpErrorResponse: '',
			formReady: false,
			errorValidation: {
				username: {
					message: '',
				},
				fullName: {
					message: '',
				},
				email: {
					message: '',
				},
				password: {
					message: '',
				},
			},
			loading: false,
			form: {
				email: '',
				username: '',
				password: '',
				fullName: '',
			},
			vueCanvas: '',
		}
	},

	methods: {
		checkPassword: function () {
			if (!this.form.password) {
				this.errorValidation.password.message = 'Password is required.'
			} else if (this.form.password.length < 6) {
				this.errorValidation.password.message = 'Password must have atleast 6 characters.'
			} else {
				this.errorValidation.password.message = ''
			}
		},
		checkFullName: function () {
			if (!this.form.fullName) {
				this.errorValidation.fullName.message = 'Full Name is required.'
			} else {
				this.errorValidation.fullName.message = ''
			}
		},
		checkUsername: async function () {
			try {
				const result = await this.$fire.firestore.collection('users').where('username', '==', this.form.username).get()
				if (result.docs.length > 0) {
					this.errorValidation.username.message = 'Username is already taken.'
				} else {
					if (!this.form.username) {
						this.errorValidation.username.message = 'Username is required.'
					} else if (this.form.username.length < 6) {
						this.errorValidation.username.message = 'Username must have atleast 6 characters.'
					} else {
						this.errorValidation.username.message = ''
					}
				}
			} catch (error) {
				this.errorValidation.username.message = error.message
			}
		},
		checkEmail: async function () {
			try {
				const result = await this.$fire.firestore.collection('users').where('email', '==', this.form.email).get()
				if (result.docs.length > 0) {
					this.errorValidation.email.message = 'Email is already taken.'
				} else {
					if (!this.form.email) {
						this.errorValidation.email.message = 'Email is required.'
					} else if (this.form.email.length < 6) {
						this.errorValidation.email.message = 'Email must have atleast 6 characters.'
					} else {
						this.errorValidation.email.message = ''
					}
				}
			} catch (error) {
				this.errorValidation.email.message = error.message
			}
		},
		signUp: async function () {
			this.loading = true
			if (this.formReady) {
				try {
					await this.$store.dispatch('auth/signUp', this.form)
					this.loading = false
					this.formReady = false
				} catch (error) {
					this.loading = false
					this.httpErrorResponse = `${error.message} `
				}
			}
		},
	},
	watch: {
		errorValidation: {
			deep: true,
			handler(oldVal, newVal) {
				if (newVal.username.message === '' && newVal.email.message === '' && newVal.fullName.message === '' && newVal.password.message === '') {
					this.formReady = true
				} else {
					this.formReady = false
				}
			},
		},
	},
}
</script>

<style></style>
