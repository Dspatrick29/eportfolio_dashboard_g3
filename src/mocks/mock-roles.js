/*
IMPORTANTE 
En caso de dar errors en los endpoints por los Links, voy a pegar el codigo modificado ya para 
crear API en mocki.io y sea solo modificar el enlace de los servicios 
{
  "Victor": {
    "id": 1,
    "name": "Víctor",
    "roles": ["docente", "estudiante", "administrador"]
  },
  "Antonio": {
    "id": 2,
    "name": "Antonio",
    "roles": ["estudiante"]
  },
  "Alberto": {
    "id": 3,
    "name": "Alberto",
    "roles": ["docente", "administrador"]
  }
}
*/
const roles = {

      Victor: { id : 1,
                 name : "Víctor",
                 roles: ["docente", "estudiante", "administrador"]
               },

      Antonio: { id : 2,
                   name : "Antonio",
                   roles: ["estudiante" ]
                   },

      Alberto : { id : 3,
                    name : "Alberto",
                    roles: ["docente", "administrador"]
                  }

    };
  export default roles;

