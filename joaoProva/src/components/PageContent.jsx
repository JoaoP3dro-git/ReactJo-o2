import PropTypes from 'prop-types';

function PageContent({ children }) {
    return (
        <div className="flex-grow container mx-auto p-4 flex gap-4 min-w-full items-center justify-center">
            {children}
        </div>
    );
}

PageContent.propTypes = {
    children: PropTypes.node.isRequired
    
};

export default PageContent;
