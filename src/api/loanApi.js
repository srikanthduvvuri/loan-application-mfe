import axios from 'axios';

export const submitLoanApplication = async (applicationData) => {
    console.log("application data in api : ", applicationData);
    try {
            // URL of backend Service; In actual prod this will refer to ENV variable
            const backendUrl = "http://127.0.0.1:62799"; 

            //const response = await fetch('http://localhost:8000/api/loans/apply', {
            const response = await fetch(`${backendUrl}/api/loans/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: false,
            body: JSON.stringify(applicationData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log("result ", result); // Handle success response
        return result;
    } catch (error) {
        console.error('Error submitting loan application:', error);
    }
}

export const getLoanStatus = async (appnum) => {
    // URL of backend Service; In actual prod this will refer to ENV variable
    const backendUrl = "http://127.0.0.1:62799"; 
    console.log('backend Url ', backendUrl);
    return await axios({
        method: 'get',
        url: `${backendUrl}/api/loans/status/${appnum}`,
        withCredentials: false,
      });
};
