export default function Card({ actor }) {
    return (
        <>
            <div className="card">
                <div className="card_image">
                    <img src={actor.image} alt={actor.name} />
                </div>
                <div className="card_details">
                    <h2 className="card_details_name">{actor.name}</h2>
                    <p className="card_details_birth">{actor.birth_year}</p>
                    <p className="card_details_nation">{actor.nationality}</p>
                    <p className="card_details_bio">{actor.biography}</p>
                    <p className="card_details_awards">{actor.awards}</p>
                    <span className="card_details_known">Known for:
                        <ul>
                            {
                                (actor.most_famous_movies || actor.known_for).map((movie, i) => (
                                    <li key={i}>{movie}</li>
                                ))
                            }
                        </ul>
                    </span>
                </div>
            </div>
        </>
    )
}