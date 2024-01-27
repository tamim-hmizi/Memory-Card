import Card from './Card'
import '../styles/cards.css'
import { useState, useEffect } from 'react'

function Cards({ setCurrentScore }) {
    const [cardsArr, setCardsArr] = useState([])

    const [render, setRender] = useState(true)

    const [selectedCards, setSelectedCards] = useState([])

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch(
                    'https://api.giphy.com/v1/stickers/trending?api_key=cO1Kj5aIDkDiN29JYe23LqYy7wxDuFNU&limit=50',
                    { mode: 'cors' }
                )
                const dataArr = await response.json()
                const data = dataArr.data
                const randomArr = []
                for (let i = 0; i < 12; i++)
                    randomArr.push(data[Math.floor(Math.random() * 50)])
                setCardsArr(randomArr)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchCards()
    }, [render])

    function handleClick(e) {
        const selectedCard = cardsArr.find(
            (card) => card.images.downsized.url === e.target.src
        )
        const selectedBefore = selectedCards.some(
            (card) => card.title === selectedCard.title
        )
        if (selectedBefore) {
            setCurrentScore(0)
            setSelectedCards([])
        } else {
            setSelectedCards((currentSelectedCards) => [
                ...currentSelectedCards,
                selectedCard,
            ])
            setCurrentScore((currentScore) => currentScore + 1)
        }

        setRender((currentRender) => !currentRender)
    }

    return (
        <div className="cards">
            {cardsArr.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    image={item.images.downsized.url}
                    onClick={(e) => handleClick(e)}
                />
            ))}
        </div>
    )
}

export default Cards
