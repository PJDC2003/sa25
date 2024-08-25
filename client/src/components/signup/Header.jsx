import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Header({ heading, paragraph, linkName, linkUrl = '#' }) {
    return (
        <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">{heading}</h2>
            <p className="text-center text-sm text-gray-600 mt-5">
                {paragraph}{' '}
                <Link to={linkUrl} className="font-medium text-purple-600 hover:text-purple-500">
                    {linkName}
                </Link>
            </p>
        </div>
    );
}

Header.propTypes = {
    heading: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired,
    linkUrl: PropTypes.string,
};
