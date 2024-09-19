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

    const listBook = [];
    books.forEach((book,index)=>{
        listBook.push(<li key={ index }> { book }</li>)
    })

    return (
        <>
            <h1>SecondComponent</h1>
            <div>
                <ul>
                    {
                        books.map((book, index) =>{
                            return <li key = { index }> { book }</li>
                        })
                    }
                </ul>
                <ul>
                    { listBook }
                </ul>
            </div>
        </>

    )
}
