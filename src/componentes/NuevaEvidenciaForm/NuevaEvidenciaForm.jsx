import './NuevaEvidenciaForm.css'

import { useContext } from "react";
import UserContext from "../../contextos/UserContext";
import { Controller, useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";


function NuevaEvidenciaForm(props) {

    const usuario = useContext(UserContext);


    // Lo primero que creo es este diccionario
    // Nombres exactos que espera el Backend (centralizados aquí para no equivocarnos)    
    const CAMPOS_FORM = {
        TAREA_ID: "tarea_id",
        ESTUDIANTE_ID: "estudiante_id",
        URL: "url",
        DESCRIPCION: "descripcion",
        ESTADO_VALIDACION: "estado_validacion",
    }

    //para usar una variable como nombre de clave, se usan corchetes []
    const OBJETOINICIAL = {
        // [CLAVE_DEL_DICCIONARIO] : VALOR
        [CAMPOS_FORM.TAREA_ID]: props.tarea.id,
        [CAMPOS_FORM.ESTUDIANTE_ID]: usuario,
        [CAMPOS_FORM.URL]: "",
        [CAMPOS_FORM.DESCRIPCION]: "",
        [CAMPOS_FORM.ESTADO_VALIDACION]: "pendiente"
    }

    // Controller siempre que el componente no sea un HTML puro
    //control es como el cerebro del formulario. Contiene todas las conexiones de tus campos.
    //  Se lo pasas al Controller
    const {
        // register: Conecta inputs HTML nativos (<input>). Importante, esto con MUI no se usa, propenso a errores.
        register,
        // control: Es el "cerebro" o puente. Indispensable para que librería externas (como MUI) hablen con el formulario.
        control,
        // handleSubmit: El "portero". Recibe tu función de envío, previene la recarga de página y valida los datos antes de dejarlos pasar.
        handleSubmit,
        // reset: Borrador. Sirve para limpiar el formulario después de enviar o para cambiar los datos iniciales dinámicamente.
        reset,
        // formState: { errors }: El saco de errores. Aquí se guardan los fallos de validación para que puedas pintar los textos rojos de alerta.
        formState: { errors },
        // watch: El "espía". Permite leer el valor de un campo en tiempo real (ej: para mostrar/ocultar cosas según lo que escriban).
        watch

    } = useForm({
        defaultValues: OBJETOINICIAL
    });





    function manejarFormulario(ObjetoNuevo) {

        
        console.log("Datos :", ObjetoNuevo);
        // 2. LLAMADA AL PADRE
        // Asumiremos que el padre te pasa una prop llamada 'manejarLaEvidencia'

        props.manejarEvidencia(ObjetoNuevo);

        // Una vez entregado el dato, limpiamos los campos 
        reset();
    }


    // render: Es una función que dice: "Yo (Controller) te doy la información necesaria, 
    // tú dime qué componente quieres que pinte".

    // field: Es un objeto que el Controller te entrega "en la mano".
    // Contiene 4 cosas que el TextField de MUI necesita para funcionar:

    // value: El valor actual (para que no uses useState).
    // onChange: La función que se dispara cuando escribes.
    // onBlur: Cuando el usuario sale del campo.
    // ref: Para que RHF pueda poner el foco en el error si hace falta.
    
    // Al escribir {...field}, estás inyectando esas 4 cosas automáticamente en el TextField
    return (
        <>
            Objeto Inicial: {console.log(OBJETOINICIAL)}

            <form id="formularioEvidencia" onSubmit={handleSubmit(manejarFormulario)}>

                {/* CAMPO DE LA URL MATERIAL UI */}
                <Controller
                    name={CAMPOS_FORM.URL} // Usamos la constante del diccionario
                    control={control}

                    // Como no voy a usar register AQUI VAN LAS REGLAS DE VALIDACION:

                    rules={
                        {
                            required: {
                                value: true,
                                message: "La URL es obligatoria"
                            },
                            // Establezco el formato:
                            pattern: {
                                value: /^(http|https):\/\//,
                                message: "El enlace debe empezar por http:// o https://"
                            }
                        }

                    }

                    render={({ field }) => (
                        <TextField
                            {...field} // Inyecta value, onChange, onBlur, ref
                            label="URL_label"
                            variant="outlined"
                            fullWidth // Para que ocupe todo el ancho
                            margin="normal" // Da un poco de espacio vertical automático

                            // 2. CONEXIÓN CON LOS ERRORES DE MUI
                            // Si existe un error en 'url', esto se vuelve true y pone el borde rojo
                            error={!!errors[CAMPOS_FORM.URL]}

                            // Si existe un error, muestra el mensaje. Si no, no muestra nada.
                            helperText={errors[CAMPOS_FORM.URL]?.message}
                        />
                    )}
                />


                {/* --- CAMPO 2: DESCRIPCIÓN --- */}
                <Controller
                    name={CAMPOS_FORM.DESCRIPCION}
                    control={control}

                    rules={
                        {
                            required: "La descripcion es obligatoria"
                        }
                    }

                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Descripción"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            size="medium" // Este es el tamaño "Normal" (opcional ponerlo, es el default)

                            error={!!errors[CAMPOS_FORM.DESCRIPCION]}
                            helperText={errors[CAMPOS_FORM.DESCRIPCION]?.message}
                        />

                    )}
                />

                <Button type='submit' variant="contained" size="medium">
                    Añadir Evidencia
                </Button>


            </form>
        </>
    )
}

export default NuevaEvidenciaForm;