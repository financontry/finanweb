import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  public formSubmitted =false;


  public registerForm= this.fb.group({
    //definir como quiere q luzca
    nombre:['',[Validators.required ,Validators.minLength(6)]],
    email:['',[Validators.required ,Validators.minLength(6),Validators.email]],
    password:['',[Validators.required ,Validators.minLength(6)]],
    password2:['',[Validators.required ,Validators.minLength(6)]],
    terminos:[false,[Validators.required ,Validators.minLength(6)]],
    } ,{
      validators: this.passwordsIguales('password','password2')
    }
 
   );

  constructor(private  fb: FormBuilder,
              private usuarioService: UsuarioService       
  ){

  }

  crearUsuario(){
    this.formSubmitted=true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid){
      return;
    }

    // realizar la creacion 
    this.usuarioService.crearUsuario(this.registerForm.value)
         .subscribe(resp =>{
          console.log('usuario creado')
          console.log(resp);
         },(err)=> {
          Swal.fire('Error', err.error.msg,'error');
         });

    }
  
  campoNoValido(campo:string ):boolean {
    if(this.registerForm.get(campo)?.invalid && this.formSubmitted ){
      return true;
    } else {
      return false;
    }
  }

  aceptaTerminos(){
    return this.registerForm.get('termonos')?.value && this.formSubmitted;
  }

  contrasenasNoValidas(){
    const pass1= this.registerForm.get('password')?.value;
    const pass2= this.registerForm.get('password')?.value;

    if ((pass1 !== pass2) && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordsIguales (pass1Name : string , pass2Name: string){
    return (formGroup : FormGroup)=>{
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);

      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null)
      } else{
        pass2Control?.setErrors( {noEsIgual: true})
      }

    }


  }


}
