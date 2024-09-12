import styles from "./Seccion.module.css";

const Cartel = ({ imagen, diaSemana, fecha, hora, texto, ubicacion, linkEntradas }) => {
    return (
        <div className={`row ${styles.contenedorCartel}`}>
            <div className="col">
                <div className={`text-almared2 text-end fs-1 fw-bold p-3 border border-5 border-almared2 ${styles.backgroundBlur}`}>
                    <p className="text-oswald m-0">{diaSemana}</p>
                    <p className="text-oswald m-0">{fecha}</p>
                    <p className="text-oswald m-0">{hora}</p>
                </div>
                <div className="d-flex justify-content-center align-items-center fs-3 mt-3">
                    <p className="text-oswald m-0">
                        {texto}
                    </p>
                    <a
                        href={ubicacion}
                        target="blank"
                        className="text-decoration-none text-light ms-4 efect-hover-gir"
                    >
                        <i className="bi bi-geo-alt"></i>
                    </a>
                </div>
                {linkEntradas && (
                    <div className="my-4">
                        <a href={linkEntradas} target="black" className="text-decoration-none btn btn-almared">Comprar entradas</a>
                    </div>
                )}
            </div>
            <div className="col d-flex justify-content-center">
                {/* <img src={`../../../public/img/${url}`} alt="" style={{ maxWidth: '300px' }} /> */}
                <img src={imagen} alt="" style={{ maxWidth: '300px' }} />
            </div>
        </div>
    );
};

export default Cartel;
