import './Card.css'
import Image from './jane-doe-500.jpg';
import Image1 from './beautiful-game-500.jpg';
import Image2 from './psychopomp-500.jpg';
import Image3 from './lets-go-500.jpg';

const cards = [
    { id:1, img: {Image}, title: "Jane Doe", desc: "Converge"},
    { id:2, img: {Image1}, title: "The Beautiful Game", desc: "Vulfpeck"},
    { id:3, img: {Image2}, title: "Psychopomp", desc: "Japanese Breakfast"},
    { id:4, img: {Image3}, title: "let's go", desc: "In Love With A Ghost"}
];


function CardList() {
    return (
        <ul>
            {cards.map(card => (
                <li key={card.id}>
                    <img className="card-image" src={card.img}></img>
                    <div className="card-descritpion">
                        <h2>{card.title}</h2> 
                        <p>{card.desc}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}