import imagenes from '../../../assets/imagenes'
import IntegranteDerecha from './IntegranteDerecha'
import IntegranteIzquierda from './IntegranteIzquierda'

const Integrantes = () => {
  const arrayIntegrantes = [{
    titulo: 'Ben Rose',
    texto: `Ben Rose, fillo dun guitarrista e criado en Estados Unidos con raíces
    galegas, entrou no mundo da música dende temperana idade.A los
    8 años, descubriu a súa paixón pola música como autodidacta,
    comezando a compoñer os seus propios temas.Dende aquela,
    recorreu un camiño musical variado, dende a súa participación no
    grupo de rock alternativo Black Rose e tras a súa disolución,
    comezou en un novo proxecto, "La Alfombra Mágica".`,
    // url: '../../../public/img/ben-rose.jpg',
    imagen: 'imgDescripcionBenRose',
    // icon: '../../../public/img/iconos/micro.png',
    icon: 'iconMicro',
    instagram: 'https://www.instagram.com/totirs?igsh=MWEwYTZhM3l6eWNvYw==',
    derecha: true
  }, {
    titulo: 'Carlota Corredoira',
    texto: `A vida de Carlota Corredoira está marcada polo seu amor e paixón
    pola música. Dende unha idade tempérana amosou un interese pola
    guitarra, estudando así no Conservatorio local.
    Graduouse como educadora infantil pola USC, e agora da clases
    nunha escola de música local.
    A guitarrista de La Alfombra Mágica tamén é amante do surf e do
    ximnasio.`,
    imagen: 'imgDescripcionCarlota',
    icon: 'iconGuitarra',
    instagram: 'https://www.instagram.com/tota_cb?igsh=ZHZnMzQ2aDI2NHZ6',
    derecha: false
  }, {
    titulo: 'Sira Goyanes',
    texto: `Sira é estudante de Comunicación Audiovisual, pero a música forma
    parte da súa vida dende que ten memoria. Empeza a tocar a batería
    aos catro anos e a guitarra a os sete.
    Sira, aficionada ao futsal e ao snow, actualmente é profesora de
    percusión nunha escola de música e a súa vida esta enlazada con
    esta disciplina artística por completo, formando parte de grupos de
    batucada, de bandas, compoñendo e cantando de forma
    autodidacta e enfocada neste grupo por completo, xa que, ademais
    de ser unha diversión e un soño.`,
    imagen: 'imgDescripcionSira',
    icon: 'iconBaquetas',
    instagram: 'https://www.instagram.com/sira_13?igsh=OXhzNWQ2czFhZjNo&utm_source=qr',
    derecha: true
  }, {
    titulo: 'Diana Abad',
    texto: `A vida de Diana empeza a relacionarse coa música dende pequena.
    Aos 11 anos comeza a tocar o contrabaixo na orquestra sinfónica dos
    Altos Mirandinos en Venezuela. En San Antonio dos Altos formou
    parte dunha big band, dun grupo de rock e dun grupo de latino.
    Posteriormente veuse a vivir a España e seguiu en contacto coa
    música en diferentes grupos como baixista e contrabaixista.
    Actualmente estuda no Conservatorio superior da Coruña e forma
    parte da orquestra Os Españois e do grupo La Alfombra Mágica.`,
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
