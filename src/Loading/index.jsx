import {Spinner} from 'reactstrap';

export function Loading(){
    return(
        <div>
            <h1>Cargando</h1>
            <Spinner color="dark"/>
        </div>
    )
}