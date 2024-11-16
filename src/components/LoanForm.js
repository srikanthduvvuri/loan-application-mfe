import React, { useState } from 'react';
import { submitLoanApplication } from '../api/loanApi';

const LoanForm = () => {
    const [formData, setFormData] = useState({
        appnum: '',
        name: '',
        amount: '',
        term: '',
    });
    const [response, setResponse] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("loan data in LoanForm.js : ", formData)
            const res = await submitLoanApplication(formData);
            console.log("RES from submitLoan ", res)
            setResponse(res);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Loan Application</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="appnum" placeholder="Application Number" onChange={handleChange} required />
                <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                <input type="number" name="amount" placeholder="Loan Amount" onChange={handleChange} required />
                <input type="number" name="term" placeholder="Term (Months)" onChange={handleChange} required />
                <button type="submit">Submit Application</button>
            </form>
            <textarea 
                value={`Message: ${response['message ']|| ''} With app ID : ${response['application_id ']}`} 
                readOnly 
                rows={2} 
                cols={150} 
                style={{ resize: 'none' }} 
            />
        </div>
    );
};

export default LoanForm;
