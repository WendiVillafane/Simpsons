import './Historia.css'
import personaje from "../../assets/personaje.jpg"
import personaje2 from "../../assets/personaje2.jpg"
import personaje3 from "../../assets/personaje3.png"
import personaje4 from "../../assets/personaje4.jpg"
import personaje5 from "../../assets/personaje5.jpg"
import personaje6 from "../../assets/personaje6.jpg"


function Historia() {
  return (
    <div className="nav-story">
    <h2>Resumen</h2>
    <p>Los Simpson es una serie de televisión animada creada por Matt Groening que se estrenó en diciembre de 1989 en el canal Fox. La serie está centrada en la vida de una familia de clase media estadounidense en la ficticia ciudad de Springfield. El patriarca de la familia es Homer Simpson, un trabajador de la planta nuclear local conocido por su amor por la cerveza Duff y su torpeza. Su esposa, Marge, es una ama de casa dedicada y cariñosa. Tienen tres hijos: Bart, un niño rebelde y travieso; Lisa, una niña inteligente y comprometida con causas sociales; y Maggie, un bebé que rara vez habla pero siempre está presente</p>
    <p>La serie es conocida por su humor satírico y su capacidad para abordar una amplia gama de temas sociales, políticos y culturales. A lo largo de los años, Los Simpson ha sido elogiada por su agudeza para comentar sobre la vida contemporánea en Estados Unidos y más allá. La serie ha ganado numerosos premios y ha sido aclamada por la crítica, convirtiéndose en una de las series de televisión más influyentes de todos los tiempos. Los Simpson ha dejado un legado duradero en la cultura popular, con una amplia gama de productos derivados, películas, videojuegos y parodias. La serie ha sido renovada para múltiples temporadas y sigue siendo una de las más populares en la televisión estadounidense. A lo largo de los años, Los Simpson ha mantenido su relevancia y continúa siendo querida por millones de espectadores en todo el mundo.</p>
    <div className='nav-personajes'>
        <div className='des-personajes'>
            <h2>Personajes</h2>
            <p>Los Simpson cuenta con una amplia variedad de personajes, tanto principales como secundarios, que contribuyen al rico universo de la serie. Aquí tienes algunos de los personajes más destacados:</p>
        </div>
        <div className='image'>
            <img alt='img' src={personaje}/>
            <img alt='img' src={personaje2}/>
            <img alt='img' src={personaje3}/>
            <img alt='img' src={personaje4}/>
            <img alt='img' src={personaje5}/>
            <img alt='img' src={personaje6}/>
        </div>
    </div>

  </div>
  
  )
}

export default Historia

