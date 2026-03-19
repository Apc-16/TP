import './CardList.css'
import Card from './Card'
import cards from '../assets/cards'


function CardList() {
    const CardList = cards.map(card => {
        return <Card
                    key={card.key}
                    img={card.img}
                    title={card.title}
                    desc={card.desc}
        />
    })


    return (
    <div className="card-list">
        {CardList}
    </div>
    );
}

export default CardList