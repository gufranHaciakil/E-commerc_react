import ReactPaginate from "react-paginate";
export default function PaginatedItems({ itemsPerPage, setPage, total }) {
    let pageCount = total / itemsPerPage
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">>"
                onPageChange={(e) => {
                    setPage(e.selected + 1)
                }
                }
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<< "
                renderOnZeroPageCount={null}
                containerClassName="flex justify-start items-center space-x-1"
                pageLinkClassName="px-4 py-1 rounded-2xl hover:bg-gray-300"
                activeClassName="px-4 py-2 bg-gray-200 rounded-2xl hover:bg-gray-300"
                previousLinkClassName="px-4 py-2  rounded-2xl hover:bg-gray-200"
                nextLinkClassName="px-4 py-2  rounded-2xl hover:bg-gray-200"

            />
        </>
    )
}

