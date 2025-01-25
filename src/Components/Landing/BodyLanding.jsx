const BodyLanding = () => {
    return (
        <div className="body-landing">
            <h2 className="titleP">Bienvenido</h2>
            <hr className="line"></hr>
            <p className="titleP">
                Este módulo se centra en el uso de <b>React</b>, incluyendo la creación de <b>componentes</b>, 
                el manejo de <b>hooks</b>, y el uso de <b>Redux</b>.
            </p>
            <h2 className="titleP">Temas Cubiertos</h2>
            <hr className="line"></hr>
            <table className="custom-table">
                <tr>
                    <td>Componentes funcionales y de clase</td>
                    <td>Uso de <b>React hooks</b> como useState y useEffect</td>
                    <td>Creación de <b>custom hooks</b> como useForm</td>
                    <td>Gestión de variables de estado con <b>useState</b></td>
                    <td>Gestión de estado global con <b>Redux</b></td>
                    <td>Integración de <b>Redux</b> con <b>React</b></td>
                    <td>Manejo de <b>Formularios</b> en <b>React</b></td>
                    <td>Publicando nuestra <p>Página</p> con <b>Github Pages</b></td>
                </tr>
            </table>
            <h2 className="titleP">Recursos Adicionales</h2>
            <hr className="line"></hr>
            <p className="titleP">Para profundizar en los temas cubiertos, consulta con los siguientes recursos</p>
        </div>
    );
};

export default BodyLanding;