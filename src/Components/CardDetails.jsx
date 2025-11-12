import DetailsList from "./DetailsList";

export default function CardDetails({ actor }) {
    return (
        <>
            <div className="card_details">

                <DetailsList actor={actor} />

            </div>
        </>
    )
}