import { ResolveEnd } from '@angular/router';

export class GlobalConstants {
    public static URL_USER = 'http://45.33.15.118:1337/User'; 
    public static URL_EXTEND_USER_EMPLOYEE = 'http://45.33.15.118:1337/ExtendsUserEmployee';
    public static URL_CHAT = 'http://45.33.15.118:1337/Chat';
    public static URL_PROGRAMACION_USUARIO = 'http://45.33.15.118:1337/Programacion';
    public static URL_FACULTAD_POR_SEDE = 'http://45.33.15.118:1337/FacultadXsede';
    public static URL_CHARTS = 'http://45.33.15.118:1337/RegistroDiario';
    /* public static apiURL: string = "https://itsolutionstuff.com/";
    public static siteTitle: string = "This is example of ItSolutionStuff.com";*/
    public static CityOfBirth = [ // ciudad de nacimiento
        'bogota',
        'manizales',
        'bucaramanga',
        'armenia',
        'cartagena',
        'barranquilla',
        'santamarta',
        'boyaca',
        'pasto',
        'amazonas',
    ];
    public static Profession = [ // profesiones
        'ingeniero civil',
        'ingeniero industrial',
        'ingeniero sistemas/mecatronico',
        'ingeniero fisico/electronico',
        'administrador empresas',
        'tecnico administracion',
        'tecnologo administracion',
        'auxiliar enfermeria',
        'medicina general',
        'medicina odontologica',
        'enfermeria superior',
        'fisioterapia',
        'tecnico/tecnologo fisioterapia'
    ];
    public static Sex = [ // genero
        'hombre',
        'mujer',
        'otro',
    ];
    // crea json para ser mostrado en la vista a partir del usuario y extend employee recibido
    public static DataUserExtendEmployeeForView(user) {
        const dataUserExtendEmployee = {
            NombreUsuario: user.userName,
            Correo: user.email,
            Identificador: user.id,
            Activo: user.active,
            Documento: user.documentNumber,
            Nombre: user.name,
            Apellido: user.lastName,
            Genero: user.sex,
            FechaNacimiento: user.birthYear,
            Direccion: user.address,
            Barrio: user.neighborhood,
            Telefono: user.phoneNumber,
            Celular: user.celphoneNumber,
            FechaContratacion: user.hiringDate,
            Foto: user.photo,
            'Ciudad Nacimiento': user.cityOfBirth,
            Profesion: user.profession,
            ModalidadContrato: user.contractModality,
            SalarioNeto: user.netSalary,
            Cargo: user.divisionPosition.name,
            SeguridadSocial: user.socialSegurity.name,
            RiesgosProfesionales: user.profesionalRisks.name,
            Pension: user.pension.name
        };
        if (dataUserExtendEmployee) {
            return dataUserExtendEmployee;
        }
    }
};