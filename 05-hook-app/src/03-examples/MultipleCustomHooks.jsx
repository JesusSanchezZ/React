import { useFetch, useCounter } from "../hooks";
import { LoadingQuote, Quote } from "../03-examples";

export const MultipleCustomHooks = () => {
    const {counter, increment, reset, decrement, setCount} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {author, quote} = !!data && data[0];
    let inicial = (counter == 1)? true: false; 

    const busca = ({target}) => {
        if(target.value == 0) return;
        setCount(target.value);
    }

    console.log({counter, inicial});
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />
            }

            <div className="row text-center">
                <div className="col-sm-12">
                    <button
                        onClick={increment}
                        disabled={isLoading}
                        className="btn btn-primary">
                        Next quote
                    </button>
                    <button
                        onClick={reset}
                        disabled={isLoading}
                        className="btn btn-primary">
                        Initial quote
                    </button>
                    <button
                        onClick={decrement}
                        disabled={isLoading || inicial}
                        className="btn btn-primary">
                        Previous quote
                    </button>
                </div>
                <div className="col-sm-12 mt-3">
                    <input type="number" onChange={busca} placeholder="Search quote" />
                </div>
            </div>
        </>
    );
}