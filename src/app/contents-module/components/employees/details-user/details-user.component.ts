import { GlobalConstants } from './../../../../common/global-constants';
// import { element } from 'protractor';
// import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import {ServiceEmployeeService} from './../service-employee.service';
import { FormGroup, FormControl, Validators, FormBuilder,  FormArray, ValidatorFn} from '@angular/forms';

// objeto permisos con id y nombre de permiso
class objPermission {
  id: string;
  name: string;
  constructor(ident, namePermission) {
    this.id = ident;
    this.name = namePermission;
  }
}

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {
  @Input() ParamChildDetailsUser: string;
  PermissionsData = [];
  UserData = {};
  keysListCheckbox = [];
  KeyDetails = true;
  // listUserExtend = {};

  allpermissions = [];
  divisionPositions = []; // lista de todos los cargos
  listCityOfBirth = GlobalConstants.CityOfBirth; // el ts se llama global-constants
  listProfession = GlobalConstants.Profession; // el ts se llama global-constants
  listSex = GlobalConstants.Sex; // el ts se llama global-constants

  keyActivatePermission = false;
  keySearchPermission = true;

  form: FormGroup;
  formEmployee: FormGroup;
  formPermissions: FormGroup;

  constructor(public serviceEmployeeService: ServiceEmployeeService, private fb: FormBuilder) {
    this.RefreshFormAndPermissions();

   }

  ngOnInit(): void {
    this.UserAndPermissions(this.ParamChildDetailsUser);
  }

  // metodo que recibe el usuario y los permisos del servidor
  UserAndPermissions(userId) {
    this.PermissionsData = [];
    this.UserData = {};
    this.serviceEmployeeService.SearchOneUser(userId).subscribe(
      data => {
        if (data.user) {
          console.log("data recibido del server ",data);
          this.UserData = GlobalConstants.DataUserExtendEmployeeForView(data.user);
          console.log("user data recibido de global constant y listo para ser mostrado ", this.UserData);
          this.InitUserAndExtendForUpdate(data.user); // inicia formularios con los datos del usuario y userextension
          console.log("dsñlfjasdñlkjfasklñjdfa", this.UserData);
        }
        if (data.permissions == null) {
          this.PermissionsData.push(null);
        }
        else {
            data.permissions.forEach(element => {
              this.PermissionsData.push({data: element.permissionFk});
            });
            console.log("usuario recibido del server ", data.user);
        }
      },
      err => {
        console.log(err);
      }
    );
  }
// fin metodo recibe el usuario y los permisos del servidor

// inicializa los formularios de user y extendUser, los llena con los datos recibidos del servidor para ser actualizados
  InitUserAndExtendForUpdate(user) {
    this.form = new FormGroup({ // inicializa formulario con los datos del usuario para mostrarlos en actualizar usuario
      id: new FormControl(user.id), // este dato no se muestra en la vista solo necesita en el server
      userName: new FormControl(user.userName, [Validators.minLength(3), Validators.required]),
      email: new FormControl(user.email, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required]),
      active: new FormControl(user.active),
    });
    this.formEmployee = new FormGroup({
      documentNumber: new FormControl(user.documentNumber, [Validators.minLength(8), Validators.required]), // validar que sea numerico
      name: new FormControl(user.name, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(user.lastName, [Validators.required, Validators.minLength(3)]),
      sex: new FormControl(user.sex, [Validators.required]),
      birthYear: new FormControl(user.birthYear, [Validators.required]),
      address: new FormControl(user.address, [Validators.required, Validators.minLength(5)]),
      neighborhood: new FormControl(user.neighborhood),
      phoneNumber: new FormControl(user.phoneNumber, [Validators.minLength(5)]), // validar que sea numerico
      celphoneNumber: new FormControl(user.celphoneNumber, [Validators.required, Validators.minLength(10)]), // validar que sea numerico
      hiringDate: new FormControl(user.hiringDate, [Validators.required, Validators.minLength(3)]), // fecha de contratacion
      photo: new FormControl(user.photo, [Validators.minLength(3)]),
      cityOfBirth: new FormControl(user.cityOfBirth),
      profession: new FormControl(user.profession),
      divisionPosition: new FormControl(user.divisionPosition.id),
      netSalary: new FormControl(user.netSalary, [Validators.required, Validators.minLength(3)]),
<<<<<<< HEAD
      contractModality: new FormControl(user.contractModality),
      socialSegurity: new FormControl(user.socialSegurity.id),
      profesionalRisks: new FormControl(user.profesionalRisks.id),
      pension: new FormControl(user.pension.id),
=======
      contractModality: new FormControl(user.contractModality, [Validators.required, Validators.minLength(3)]),
      socialSegurity: new FormControl(user.socialSegurity.id, [Validators.required, Validators.minLength(3)]),
      profesionalRisks: new FormControl(user.profesionalRisks.id, [Validators.required, Validators.minLength(3)]),
      pension: new FormControl(user.pension.id, [Validators.required, Validators.minLength(3)]),
>>>>>>> deivis
    });
  }
// metodo inicial para actualizar datos usuario
  UpdateUser() {
    this.InitListFormPermissions(); // inicializa el formPermission con los permisos que tenga el usuario inicialmente
    if (this.keySearchPermission === true) {
      this.SearchPermissionsAndPosition();
      this.keySearchPermission = false;
    }
    else{
      this.InitListChecks(this.allpermissions);
    }
    this.KeyDetails = false;
  }

// visualiza todos los permisos que tiene un usuario
  SearchPermissionsAndPosition() {
    this.keysListCheckbox = [];
    this.divisionPositions = [];
    this.serviceEmployeeService.SearchPermissionAndPositions().subscribe(
      data => {
        this.allpermissions = data.permission;
        this.divisionPositions = data.position;
        console.log("todos los servicios directamente desde el llamado al servidor ", this.divisionPositions );

        this.InitListChecks(data.permission); // actualiza la lista de checkeo de permisos con los permisos que tiene el usuario de la db

      },
      err => {
        console.log(err);
      }
    );
  }

// inicializa o actualiza lista de checks con los permisos personales de cada usuario cada vez que se hace la busqueda de usuario y permisos
  InitListChecks(dataAllPermission) {
    this.keysListCheckbox = [];
    console.log("este es el data que esta llegando a initListCheck",dataAllPermission);
    dataAllPermission.forEach(element => {
      this.keysListCheckbox.push(false);
    });
    if (this.PermissionsData[0] !== null) {
      console.log("lista de keys",this.keysListCheckbox.length);
      this.PermissionsData.forEach(item => { // inicializa la lista de keyChecbox con false y true en la posicion de permiso del usuario
        for (let i = 0; i < dataAllPermission.length; i++) {
          if (item.data.name === dataAllPermission[i].name) {
            this.keysListCheckbox[i] = true;
          }
        }
      });
    }
  }
// inicializa formPermissions con los permisos que tiene el usuario en la base de datos en caso de tenerlos
  InitListFormPermissions() {
    let permission;

    if (this.PermissionsData[0] !== null) {

      this.PermissionsData.forEach(element => {
        const objNameIdPermission = new objPermission(element.data.id, element.data.name); // crea objeto permiso id y nombre
        permission = (this.formPermissions.controls.idPermission as FormArray); // crea nuevo formArray en la lista del formPermissions
        permission.push(new FormControl(objNameIdPermission)); // agrega edicho campo con los datos id y nombre al formPermision
      });
    }
    console.log("formulario inicial de permisos ",this.formPermissions.value.idPermission);
  }
// fin inicializacion formPermission

// prepara set de datos usuario y permissos para ser enviados al servicio y luego al server
  PrepareDataUpdate() {
    if (this.keyActivatePermission === true) {
      this.SendUpdateUserAndPermissions(this.form.value, this.formEmployee.value, this.formPermissions.value.idPermission);
    } else {
      this.SendUpdateUserAndPermissions(this.form.value, this.formEmployee.value, null);
    }
  }
// -------fin preparar set de datos------------------

// controles de form de usuario y employee-------------------
  get f() {
    return this.form.controls;
  }
  get fEmployee() {
    return this.formEmployee.controls;
  }
// ---fin controles de form usuario

// adiciona o elimina id del permiso cada vez que la lista de checkbox se active o desactive html
  onChangeCheck(id: string, name: string, isChecked: boolean) {
    this.keyActivatePermission = true;
    const permission = (this.formPermissions.controls.idPermission as FormArray);

    if (isChecked) {
      const objNameIdPermission = new objPermission(id, name);
      permission.push(new FormControl(objNameIdPermission));
      console.log("entro a crear permiso",this.formPermissions.value.idPermission);
    }
    else {
      const index = permission.controls.findIndex(x => x.value.id === id);
      permission.removeAt(index);
    }
  }
// fin adicionar o eliminar permiso por id

SendUpdateUserAndPermissions(user, extendUserEmployee, permissions) {
  console.log("estos son los datos de user ya modificado", user);
    console.log("estos son los datos de extend user ya modificado", extendUserEmployee);
    console.log("estos son los datos de permission ya modificado", permissions);
  this.serviceEmployeeService.UpdateUserAndPermissions(user, extendUserEmployee, permissions).subscribe(
    data => {
      this.RefreshFormAndPermissions();
      console.log("retorno de actualizacion de los datos ",data);
      this.UserAndPermissions(this.ParamChildDetailsUser); // iniciamos nuevamente buscando los datos del usuario y permisos
      this.KeyDetails = true;
    },
    err => {
      console.log("hubo un error "+err);
    }
  );

}

// refresca tanto la lista de permisos como la de datos del usuario
  RefreshFormAndPermissions() {
    this.formPermissions = this.fb.group({
      idPermission: this.fb.array([])
    });
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required]),
      active: new FormControl('', [Validators.required]),
    });
    this.formEmployee = new FormGroup({
      documentNumber: new FormControl('', [Validators.minLength(8), Validators.required]), // validar que sea numerico
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sex: new FormControl('', [Validators.required]),
      birthYear: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(5)]),
      neighborhood: new FormControl('', [Validators.required, Validators.minLength(4)]),
      phoneNumber: new FormControl('', [Validators.minLength(5)]), // validar que sea numerico
      celphoneNumber: new FormControl('', [Validators.required, Validators.minLength(10)]), // validar que sea numerico
      hiringDate: new FormControl('', [Validators.required, Validators.minLength(3)]), // fecha de contratacion
      photo: new FormControl('', [Validators.minLength(3)]),
      cityOfBirth: new FormControl('', [Validators.required, Validators.minLength(4)]),
      profession: new FormControl(''),
      divisionPosition: new FormControl('', [Validators.required, Validators.minLength(5)]),
      netSalary: new FormControl('', [Validators.required, Validators.minLength(3)]),
      contractModality: new FormControl('', [Validators.required, Validators.minLength(3)]),
      socialSegurity: new FormControl('', [Validators.required, Validators.minLength(3)]),
      profesionalRisks: new FormControl('', [Validators.required, Validators.minLength(3)]),
      pension: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
    // $("input:checkbox").prop("checked", false);
  }
// fin refrescar formularios y lista de keyCheckbox

}

