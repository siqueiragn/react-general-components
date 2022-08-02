 import { useState } from 'react';
 
 function CreatePerson({person}) {

    const [name, setName] = useState();
    const [dateOfBirth, setDateOfBirth] = useState();
    const [email, setEmail] = useState();
    const [jobTitle, setJobTitle] = useState();

    function postPerson(event) {
        
        event.preventDefault();
        alert(`Nome: ${name}\nDOB: ${dateOfBirth}\nE-mail: ${email}\nJob Title: ${jobTitle}`);

    }


    return (
        <div>
            <form onSubmit={postPerson}>
                <div>
                    <label forHtml="p_name">Name: </label>
                    <input type="text" id="p_name" name="p_name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label forHtml="p_dob">Date of Birth: </label>
                    <input type="date" id="p_dob" name="p_dob" onChange={(e) => setDateOfBirth(e.target.value)} />
                </div>
                <div>
                    <label forHtml="p_mail">Email: </label>
                    <input type="text" id="p_mail" name="p_mail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label forHtml="p_job_title">Job Title:</label>
                    <input type="text" id="p_job_title" name="p_job_title" onChange={(e) => setJobTitle(e.target.value)} />
                </div> 
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default CreatePerson;