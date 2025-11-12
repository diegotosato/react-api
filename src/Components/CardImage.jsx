export default function CardImage({ actor }) {
    return (
        <>
            <div className="card_image">
                <img src={actor.image} alt={actor.name} />
            </div>
        </>
    )
}