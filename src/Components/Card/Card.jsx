import imageUrl from '../../assets/imageUrl.jpg'
import imageUrl2 from '../../assets/imageUrl2.jpg'
import './Card.css'


function Card({imageUrl, title, text}){
    return(
        <div className="card">
      <img className="card-image" src={imageUrl} alt="Card" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{text}</p>
      </div>
    </div>
    
 
       
       
       
       

    );
}
export default Card