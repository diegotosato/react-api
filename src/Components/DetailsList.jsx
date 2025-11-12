import AwardList from "./AwardList";

export default function DetailsList({ actor }) {
    return (
        <>
            <h2 className="card_details_name">{actor.name}</h2>
            <p className="card_details_birth">{actor.birth_year}</p>
            <p className="card_details_nation">{actor.nationality}</p>
            <p className="card_details_bio">{actor.biography}</p>
            <p className="card_details_awards">{actor.awards}</p>
            <span className="card_details_known">Known for:
                <ul>
                    {
                        (actor.most_famous_movies || actor.known_for).map((movie, i) => (
                            <AwardList key={i} movie={movie} />
                        ))
                    }
                </ul>
            </span>
        </>
    )
}