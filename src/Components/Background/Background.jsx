import './Background.css'

import imagen1 from '../../assets/imagen1.jpg'
import imagen2 from '../../assets/imagen2.jpg'
import imagen3 from '../../assets/imagen3.jpg'


const Background = ({playStatus,heroCount}) => {


    if (playStatus) {
        return (
            <video className='background' autoplay loop muted>
              <source src={video} type='video/mp4' />  
            </video>
        )
    }
    else if(heroCount===0)
    {
        return <img src={imagen1} className='background' alt='' />
    }
    else if(heroCount===1)
    {
        return <img src={imagen2} className='background' alt='' />
    }
    else if(heroCount===2)
    {
        return <img src={imagen3} className='background' alt='' />
    }
}

export default Background
