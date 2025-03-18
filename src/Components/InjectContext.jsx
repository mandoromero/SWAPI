import React from "react";
import { Provider } from "react-redux";
import store from "../store/store.mjs"; // Ensure this path is correct

// `InjectContext` is a higher-order component
// const InjectContext = (WrappedComponent) => {
//     const HOC = (props) => {
//         return (
//             <Provider store={store}>
//                 <WrappedComponent {...props} />
//             </Provider>
//         );
//     };    return HOC;
// };

// export default InjectContext;
const InjectContext = (WrappedComponent) => {
    return (props) => (
        <Provider store={store}>
            <WrappedComponent {...props} />
        </Provider>
    );
};

export default InjectContext;