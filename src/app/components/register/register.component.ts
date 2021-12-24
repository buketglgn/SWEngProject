import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }
  createRegisterForm(){
    this.registerForm=this.formBuilder.group({
      userName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
    })
  }
  register(){
    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      let registerModel=Object.assign({},this.registerForm.value)
      this.authService.register(registerModel).subscribe(response=>{
        
        this.toastrService.info("Kayıt Başarılı.")
        localStorage.setItem("token",response.token)
      },(responseError)=>{
        this.toastrService.error(responseError.error.errors);
      })
    }
  }

}
