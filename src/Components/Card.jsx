import CardDetails from "./CardDetails";
import CardImage from "./CardImage";

export default function Card({ actor }) {
    return (
        <>
            <div className="card">

                <CardImage actor={actor} />

                <CardDetails actor={actor} />


            </div>
        </>
    )
}