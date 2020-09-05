import { GlobalConstants } from './../../../../common/global-constants';
import { ServiceEmployeeService } from '../service-employee.service';
import { Component, OnInit, Input } from '@angular/core';


import { FormGroup, FormControl, Validators, FormBuilder,  FormArray, ValidatorFn} from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  form: FormGroup; // formulario usuario
  formEmployee: FormGroup; // formulario extencion de usuario empleado
  formPermissions: FormGroup; // formuilario de permisos
  permissions = []; // lista de todos los permisos 
  divisionPositions = []; // lista de todos los cargos
  keysCheckbox = []; // lista de checbox que se enlaza a los de permisos para refrescar todos los checbox cuando se necesiten
  listCityOfBirth = GlobalConstants.CityOfBirth; // el ts se llama global-constants
  listProfession = GlobalConstants.Profession; // el ts se llama global-constants
  listSex = GlobalConstants.Sex; // el ts se llama global-constants

  constructor(public serviceEmployeeService: ServiceEmployeeService, private fb: FormBuilder) {
    this.InitForms();
  }

  ngOnInit(): void {
    this.SearchDivisionAndPermission();
  }

  // -----busca todos los permisos cuando se inicia carga la pagina--------
    SearchDivisionAndPermission() {
      this.permissions = [];
      this.divisionPositions = [];
      this.serviceEmployeeService.SearchPermissionAndPositions().subscribe(
        data => {
          this.permissions = data.permission;
          this.divisionPositions = data.position;
          console.log("esto es lo que tiene this.permissions", this.permissions);
          console.log("esto es lo que tiene this.divisions", this.divisionPositions);
          data.permission.forEach(element => {
            this.keysCheckbox.push(false);
          });
          console.log("estos son los permisos para ser mostrados ", this.permissions);
        },
        err => {
          console.log(err);
        }
      );
    }
  // -------------fin buscar permisos----------

  // -------------ingresar y administrar checklist-------------------
  onChange(id: string, isChecked: boolean) {
    const permission = (this.formPermissions.controls.idPermission as FormArray);

    if (isChecked) {
      permission.push(new FormControl(id));
    } else {
      const index = permission.controls.findIndex(x => x.value === id);
      permission.removeAt(index);
    }
  }

  InitForms() {//inicia todos los formularios
    console.log("reinicia todo");
    this.formPermissions = this.fb.group({
      idPermission: this.fb.array([])
    });
    this.form = new FormGroup({
      username: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
    this.formEmployee = new FormGroup({
      documentNumber: new FormControl('', [Validators.minLength(8), Validators.required]), // validar que sea numerico
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sex: new FormControl('', [Validators.required]),
      birthYear: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      neighborhood: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.minLength(5)]), // validar que sea numerico
      celphoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]), // validar que sea numerico
      // hiringDate: new FormControl('', [Validators.required, Validators.minLength(6)]), // fecha de contratacion
      photo: new FormControl('', [Validators.minLength(3)]),
      cityOfBirth: new FormControl(''),
      profession: new FormControl(''),
      divisionPosition: new FormControl(''),
      /*netSalary: new FormControl('', [Validators.required, Validators.minLength(3)]),
      contractModality: new FormControl('', [Validators.required, Validators.minLength(5)]),
      socialSegurity: new FormControl('', [Validators.required, Validators.minLength(5)]),
      profesionalRisks: new FormControl('', [Validators.required, Validators.minLength(5)]),
      pensionfK: new FormControl('', [Validators.required, Validators.minLength(5)]),*/
    });
  }
  RefreshFormAndPermissions() {
    this.InitForms();
    //$("input:checkbox").prop("checked", false);
    for (let i = 0; i < this.permissions.length; i++) {
      this.keysCheckbox[i] = false;
    }
  }

// ---------------------fin ingresar y administrar checklist---------------------------

// ----------------------inicio envio crear nuevo cliente------------------------------
  PrepareData() {
    console.log("permisos ",this.formPermissions.value.idPermission);
    console.log("usuario ",this.form.value);
    console.log("extension empleado ",this.formEmployee.value);

    if (this.form.value && this.formEmployee.value && this.formPermissions.value.idPermission ) {
      this.SendFormCreateUser(this.form.value, this.formEmployee.value, this.formPermissions.value.idPermission);
    } else {
      alert('Por favor llenar todo el formulario y seleccionar permisos de usuario');
    }
  }

  SendFormCreateUser(formUser, formExtendEmployee, dataUserPermissions) {
    console.log("datos usuario ", formUser);
    this.serviceEmployeeService.CreateUser(formUser, formExtendEmployee, dataUserPermissions).subscribe(
      data => {
        this.RefreshFormAndPermissions();
        console.log(data);
      },
      err => {
        //this.RefreshFormAndPermissions();
        console.log(err);
      }
    );
  }

  get f() {
    return this.form.controls;
  }
  get fEmployee() {
    return this.formEmployee.controls;
  }

// ------------------------fin envio crear nuevo cliente---------------------------------------


}
