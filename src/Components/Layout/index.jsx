import React from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes

const Layout = ({children}) => {
    return(
        <div className='flex flex-col items-center mt-20'>
            {children}
        </div>
    )

}

// Validación de PropTypes
Layout.propTypes = {
    children: PropTypes.node.isRequired, // children debe ser un nodo de React y es obligatorio
};

export default Layout
