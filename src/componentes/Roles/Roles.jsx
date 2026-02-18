
import MenuRoles from '../MenuRoles/MenuRoles';
import './Roles.css'

export function Roles(props) {

    return (
        <>
            <aside className='roles'>
                <p>ROLES</p>
                {/* Puedo meterle un prop con un usuario pero ya he definido en el componente que por 
                defecto sea Victor asi que lo dejare vacio */}
                <MenuRoles></MenuRoles>
            </aside>
        </>
    );
}