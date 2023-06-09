// Importing the Link component from the react-router-dom library
import { Link } from "react-router-dom";

// Declaring an interface Props for type checking the props of the component
interface Props {
    message: string;
}

// Defining a React functional component SuccessCard with Props as its type
const SuccessCard: React.FC<Props> = ({ message }) => {
    // Returns the JSX that renders the component
    return (
        // A div container with a flex layout for centering the content
        <div className="flex items-center justify-center h-screen">
            {/* A div container with a max width, padding, background color, shadow and border radius */}
            <div className="max-w-md w-full px-6 py-4 bg-white shadow-lg rounded-lg">
                {/* A div container with an animation class, color and font size for the success icon */}
                <div className="animate-pulse text-green-500 text-4xl mb-4">
                    {/* An SVG icon with a green color that represents a checkmark */}
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
                {/* A div container with a font size and weight for the success message */}
                <div className="text-center text-xl font-bold mb-4">{message}</div>
                {/* A div container with a flex layout for centering the button */}
                <div className="flex justify-center">
                    {/* A Link component from react-router-dom that leads to the home page */}
                    <Link
                        to="/"
                        className="py-2 px-4 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                    >
                        {/* A button with a green background and white text */}
                        OK
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Exporting the SuccessCard component as the default export of the module
export default SuccessCard;
