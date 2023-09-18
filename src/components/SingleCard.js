import './SingleCard.css'

export default function SingleCard({ card, handleChoice, fliped }) {
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div>
      <div className='card'>
        <div className={fliped ? 'fliped' : ''}>
          <img className='front' src={card.src} alt='card front' />
          <img className='back' onClick={handleClick} src='/img/cover.png' alt='card back' />
        </div>
      </div>
    </div>
  )
}
