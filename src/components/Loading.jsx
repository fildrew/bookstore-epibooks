import { Spinner } from 'react-bootstrap'

const Loading = () => (
    <Spinner animation="border" variant="success" className='mt-2' role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
)

export default Loading;