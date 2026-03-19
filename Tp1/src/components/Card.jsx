import './Card.css'




function Card(props) {
    return(
        <div className="card">
            <img className="card-image" src={props.img} alt={props.title} />
            <div className="card-description">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>


    );
}







export default Card