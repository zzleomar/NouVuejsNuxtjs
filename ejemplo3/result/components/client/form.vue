<template>
	<div>
		<b-field label="Name" :type="nameValidate">
            <b-input v-model="name"></b-input>
        </b-field>

        <b-field label="Email" :type="emailValidate">
            <b-input placeholder="Email" v-model="email" type="email"></b-input>
        </b-field>

        <b-field label="Username"
            :type="usernanameValidate"
            message="This username is available">
            <b-input v-model="username" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password"
                 v-model="password"
                password-reveal>
            </b-input>
        </b-field>

        <b-field label="Message">
            <b-input type="textarea" 
            	minlength="10"
                maxlength="100"
                placeholder="Maxlength automatically counts characters">
                </b-input>
        </b-field>
		<div class="block">
			<div class="field">
	            <b-radio v-model="radio"
	                native-value="success"
	                type="is-success">
	                Hombre
	            </b-radio>
	        </div>
	        <div class="field">
	            <b-radio v-model="radio"
	                native-value="danger"
	                type="is-danger">
	                Femenino
	            </b-radio>
	        </div>
    	</div>
    	<b-field>
            <b-radio-button v-model="radioButton"
                native-value="Nop"
                type="is-danger">
                <b-icon icon="close"></b-icon>
                <span>Casado</span>
            </b-radio-button>

            <b-radio-button v-model="radioButton"
                native-value="Default"
                type="is-success">
                <b-icon icon="check"></b-icon>
                <span>Soltero</span>
            </b-radio-button>

            <b-radio-button v-model="radioButton"
                native-value="Yep">
                Divorciado
            </b-radio-button>
        </b-field>
		 <a class="button is-primary is-outlined is-large is-fullwidth marginTop btnPerso"  @click="save">Save</a>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				radio: 'default',
				radioButton: 'Default',
				name: '',
				username: '',
				email: "",
				password:"",
				nameValidate:"",
				usernanameValidate:"",
				emailValidate:""
			}
		},
		watch: {
            name(newValue, oldValue) {
            	if(newValue!=''){
					this.nameValidate='is-success'
				}
				else{
					this.nameValidate='is-warning'
				}
            },
            username(newValue, oldValue) {
            	if(newValue!=''){
					this.usernanameValidate='is-success'
				}
				else{
					this.usernanameValidate='is-warning'
				}
            },
            email(newvalue,old){
            	let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
			    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
			    if (emailRegex.test(newvalue)) {
					this.emailValidate='is-success'
			    } else {
					this.emailValidate='is-warning'
			    }
            }
        },
        methods:{
        	save() {
                this.$dialog.prompt({
                    message: `¿Seguro Desea guardar esta informarción si/no?`,
                    onConfirm: (value) => {
                    		if(value=='si'){
                    			this.$toast.open(`Operación Exitosa`)
                    			this.$router.push('/')
                    		}
                    	}
                })
            }
        }
	}
</script>

<style type="text/css">
	.marginTop{
		margin-top: 60px !important;
	}
	.btnPerso{
		width: 70% !important;
		margin: auto;
	}
</style>