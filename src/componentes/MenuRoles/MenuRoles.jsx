import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './MenuRoles.css'
import useRoles from '../../hooks/useRolesMock';
import opcionesMenu from '../../mocks/mock-administrador';
import useMisModulosImpartidos from '../../hooks/useMisModulosImpartidosMock';
import useMisModulosMatriculados from '../../hooks/useMisModulosMatriculadosMock';

function MenuRoles(props) {

    const usuarioConectado = props.usuario || "Victor";


    // 1. Llamamos a los 3 hooks usando ALIAS para evitar que explote por el mismo nombre de variables
    const { buscando: buscandoRoles, lista: rolesUsuario } = useRoles(usuarioConectado);
    const { buscando: buscandoDocente, lista: modulosDocente } = useMisModulosImpartidos(usuarioConectado);
    const { buscando: buscandoEstudiante, lista: modulosEstudiante } = useMisModulosMatriculados(usuarioConectado);


    // Esto quedaria  mas bonito con un Loader
    if (buscandoRoles) {
        return <p>Cargando menú...</p>;
    }

    return (
        <div className="menu-roles-container">

            {/* Un map para cargar las opciones distintas de rol */}
            {rolesUsuario.map((rol, index) => (
                <Accordion key={index}>

                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{rol}</Typography>
                    </AccordionSummary>

                    <AccordionDetails>

                        {/* Lógica para ADMINISTRADOR */}
                        {rol === "administrador" && (

                            <div className="menu-admin-lista">
                                {/* EL mismo map  */}
                                {opcionesMenu.administrador.map((item, i) => (
                                    <Typography
                                        key={i}
                                        component="a"
                                        // la ruta es un atributo del mock
                                        href={item.ruta}
                                        className="menu-admin-link"
                                    >
                                        {item.nombre}
                                    </Typography>
                                ))}

                            </div>

                        )}
                        {/* Lógica para DOCENTE */}
                        {rol === "docente" && (
                            <div className="menu-admin-lista">
                                {buscandoDocente ? <Typography>Cargando módulos...</Typography> : modulosDocente.map((modulo) => (
                                    <Typography
                                        key={modulo.id}
                                        component="a"
                                        // Ruta dinámica inyectando el ID del módulo
                                        href={`/funcionalidaddocente/${modulo.id}`}
                                        className="menu-admin-link"
                                    >
                                        {modulo.nombre}
                                    </Typography>
                                ))}
                            </div>
                        )}

                        {/* Lógica para ESTUDIANTE*/}
                        {rol === "estudiante" && (
                            <div className="menu-admin-lista">
                                {buscandoEstudiante ? <Typography>Cargando módulos...</Typography> : modulosEstudiante.map((modulo) => (
                                    <Typography
                                        key={modulo.id}
                                        component="a"
                                        // Ruta dinámica inyectando el ID del módulo
                                        href={`/funcionalidadestudiante/${modulo.id}`}
                                        className="menu-admin-link"
                                    >
                                        {modulo.nombre}
                                    </Typography>
                                ))}
                            </div>
                        )}

                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
export default MenuRoles;