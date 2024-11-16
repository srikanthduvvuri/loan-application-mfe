import React, { useState } from 'react';
import { getLoanStatus } from '../api/loanApi';

const LoanStatus = () => {
    const [applicationId, setApplicationId] = useState('');
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setApplicationId(e.target.value);
    };

    const handleCheckStatus = async () => {
        try {
            console.log('Invoking function on loanApi.js .... ')
            const res = await getLoanStatus(applicationId);
            console.log("result ",res.data)
            setStatus(res.data);
        } catch (error) {
            console.log('got an error ... ')
            console.error(error);
            const errmsg = {
                status: "app not found"
            };
            setStatus(errmsg)
        }
    };

    return (
        <div>
            <h2>Check Loan Status</h2>
            <input type="text" placeholder="Application Num" onChange={handleChange} />
            <button onClick={handleCheckStatus}>Check Status</button>
            {status && <p>Status: {status.status}</p>}
        </div>
    );
};

export default LoanStatus;
