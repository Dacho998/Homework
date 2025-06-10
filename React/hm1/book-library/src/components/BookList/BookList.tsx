import "./bookList.css"

export const library = [
    { id: 1, title: 'Foundation ', author: 'Isaac Asimov', year: 1956, isRead: true },
    { id: 2, title: '1984', author: 'George Orwell', year: 1964, isRead: true },
    { id: 3, title: 'Rich Dad Poor Dad', author: 'Robert Kiyosaki', year: 2002, isRead: false },
    { id: 4, title: 'Divine Comedy', author: 'Dante Alighieri', year: 1450, isRead: true },
    { id: 5, title: 'Crime and Punishment', author: 'Dostoevsky', year: 1879, isRead: false },
]
export const BookList = () => {

    return (
        <>
            <table className='books'>
                <thead >
                    <tr>
                        <th>TITLE</th>
                        <th>AUTHOR</th>
                        <th>YEAR</th>
                        <th>IS READ</th>
                    </tr>
                </thead>
                <tbody>
                    {library.map((book) => (
                        <tr key={book.id} className={book.isRead ? "read" : "notRead"}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>{book.isRead ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
