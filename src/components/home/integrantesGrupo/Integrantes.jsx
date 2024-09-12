import imagenes from '../../../assets/imagenes'
import IntegranteDerecha from './IntegranteDerecha'
import IntegranteIzquierda from './IntegranteIzquierda'

const Integrantes = () => {
  const arrayIntegrantes = [{
    titulo: 'Ben Rose',
    texto: `Ben Rose, hijo de un guitarrista y criado en Estados Unidos con raíces gallegas, entró en el mundo de la música desde temprana edad. A los 8 años, descubrió su pasión por la música como autodidacta, comenzando a componer sus propios temas. Desde entonces, ha recorrido un camino musical variado, desde su participación en el grupo de rock alternativo Black Rose y tras su disolución, comenzó en un nuevo proyecto, "La Alfombra Mágica".`,
    // url: '../../../public/img/ben-rose.jpg',
    imagen: 'imgDescripcionBenRose',
    // icon: '../../../public/img/iconos/micro.png',
    icon: 'iconMicro',
    instagram: 'https://www.instagram.com/totirs?igsh=MWEwYTZhM3l6eWNvYw==',
    derecha: true
  }, {
    titulo: 'Carlota Corredoira',
    texto: `La vida de Carlota Corredoira está marcada por su amor y pasión por la música. Desde una edad temprana mostró un interés por la guitarra, estudiando así en el Conservatorio local. Se graduó como educadora infantil por la USC, y ahora imparte clases en una escuela de música local. La guitarrista de La Alfombra Mágica también es amante del surf y del gimnasio.`,
    imagen: 'imgDescripcionCarlota',
    icon: 'iconGuitarra',
    instagram: 'https://www.instagram.com/tota_cb?igsh=ZHZnMzQ2aDI2NHZ6',
    derecha: false
  }, {
    titulo: 'Sira Goyanes',
    texto: `Sira es estudiante de Comunicación Audiovisual, pero la música forma parte de su vida desde que tiene memoria. Comenzó a tocar la batería a los cuatro años y la guitarra a los siete. Sira, aficionada al futsal y al snowboard, actualmente es profesora de percusión en una escuela de música y su vida está completamente vinculada con esta disciplina artística. Forma parte de grupos de batucada, de bandas, compone y canta de forma autodidacta y enfocada en este grupo por completo, ya que además de ser una diversión, es un sueño para ella.`,
    imagen: 'imgDescripcionSira',
    icon: 'iconBaquetas',
    instagram: 'https://www.instagram.com/sira_13?igsh=OXhzNWQ2czFhZjNo&utm_source=qr',
    derecha: true
  }, {
    titulo: 'Diana Abad',
    texto: `La vida de Diana comienza a relacionarse con la música desde pequeña. A los 11 años empieza a tocar el contrabajo en la orquesta sinfónica de los Altos Mirandinos en Venezuela. En San Antonio de los Altos formó parte de una big band, de un grupo de rock y de un grupo de música latina. Posteriormente, se trasladó a vivir a España y siguió en contacto con la música en diferentes grupos como bajista y contrabajista. Actualmente estudia en el Conservatorio Superior de A Coruña y forma parte de la orquesta Os Españois y del grupo La Alfombra Mágica.    `,
    imagen: 'imgDescripcionDiana',
    icon: 'iconBajo',
    instagram: 'https://www.instagram.com/diana_abad23?igsh=MWRqZWYxdWJzcGxhOA==',
    derecha: false
  }]

  return (
    <section>
      {arrayIntegrantes && arrayIntegrantes.map((integrante, index) => {
        if (integrante.derecha) {
          return (
            <IntegranteDerecha
              key={index}
              titulo={integrante.titulo}
              texto={integrante.texto}
              imagen={imagenes[integrante.imagen]}
              icon={imagenes[integrante.icon]}
              instagram={integrante.instagram}
            />
          )
        } else {
          return (
            <IntegranteIzquierda
              key={index}
              titulo={integrante.titulo}
              texto={integrante.texto}
              imagen={imagenes[integrante.imagen]}
              icon={imagenes[integrante.icon]}
              instagram={integrante.instagram}
            />
          )
        }
      })}
    </section>
  )
}

export default Integrantes
