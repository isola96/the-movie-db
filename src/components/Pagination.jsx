import Button from 'react-bootstrap/Button'

const Pagination = ({ page, changePage, isPreviousData }) => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            <Button 
                disabled={isPreviousData || page <= 1} 
                onClick={() => changePage({ page: Number(page) - 1, })} 
                variant='primary'
                >Previous
            </Button>

            <span>page: {page}/500</span>

            <Button 
                disabled={isPreviousData || page >= 500} 
                onClick={() => changePage({ page: Number(page) + 1, })} 
                variant='primary'
                >Next
            </Button>
        </div>
    )
}

export default Pagination