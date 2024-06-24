import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public formSubmitted =false;



  public loginForm: FormGroup= this.fb.group({
    //definir como quiere q luzca
    email:[localStorage.getItem('email') || '' ,[Validators.required ,Validators.minLength(6),Validators.email]],
    password:['',[Validators.required ,Validators.minLength(6)]],
    remember:['false']
    } );

  constructor( private router: Router ,
               private  fb: FormBuilder,
               private usuarioService: UsuarioService ){ }

  
  login( ){
    
    //mandamos todo el datops
    this.usuarioService.login(this.loginForm.value)
        .subscribe( resp => {
          if(this.loginForm.get('remember')?.value){
             localStorage.setItem('email',this.loginForm.get('email')?.value);
          } else {
            localStorage.removeItem('email');
          }

        }, (err) =>{
          Swal.fire('Error',err.error.msg,'error');
        } );
    //console.log(this.loginForm.value)
    //this.router.navigateByUrl('/');

  }

}
