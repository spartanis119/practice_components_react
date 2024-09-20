export const SecondComponent = () => {

    const books = [
        "Harry potter y la piedra filosofal",
        "Harry potter y la camára secreta",
        "Harry potter y el prisionera de Azkaban",
        "Harrty potter y el caliz de fuego",
        "Harry potter y la orden del fenix",
        "Harry potter y el misterio del pricipe",
        "Harry potter y la reliquias de la muerte"
    ];

    // Evaluar una condicion ? (parte verdadera) : parte del false
    // condicion ? (verdadero) : (falso)

    return (
        <>
            <h1>SecondComponent</h1>
            <div>
                <ul>
                    {books.length >= 1 ?
                        (
                            books.map((book, index) => {
                                return <li key={index}> {book}</li>
                            })
                        )
                        :
                        (
                        <p>No existen libros</p>
                        )
                        }
                </ul>
                <ul>
                </ul>
            </div>
        </>

    )
}
