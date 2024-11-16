import React from 'react';
import LoanForm from './components/LoanForm';
import LoanStatus from './components/LoanStatus';

const App = () => {
    return (
        <div>
            <h1>Loan Processing System</h1>
            <LoanForm />
            <LoanStatus />
        </div>
    );
};

export default App;
