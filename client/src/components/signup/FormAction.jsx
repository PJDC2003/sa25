import PropTypes from 'prop-types';

export default function FormAction({ handleSubmit, type = 'Button', action = 'submit', text }) {
    FormAction.propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        type: PropTypes.string,
        action: PropTypes.string,
        text: PropTypes.string,
    };

    return (
        <div className="flex justify-center">
            {type === 'Button' ? (
                <button
                    type={action}
                    className="group relative w-1/2 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
                    onSubmit={handleSubmit}
                >
                    {text}
                </button>
            ) : (
                <></>
            )}
        </div>
    );
}
