import { Link } from "react-router-dom";

interface Props {
    message: string;
}

const SuccessCard: React.FC<Props> = ({ message }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="max-w-md w-full px-6 py-4 bg-white shadow-lg rounded-lg">
                <div className="animate-pulse text-green-500 text-4xl mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 mx-auto"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm2.293-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <div className="text-center text-xl font-bold mb-4">{message}</div>
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                    >
                        OK
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuccessCard;
