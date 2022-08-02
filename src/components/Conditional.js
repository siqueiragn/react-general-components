import {useState} from 'react';

function Conditional() {

    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function sendMail(e) {
        e.preventDefault();
        setUserEmail(email);
    };

    function unsetMail(e) {
        e.preventDefault();
        setUserEmail('');
    }

    return (
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input type="email" placeholder="Digite seu e-mail..." onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={sendMail}>
                    Enviar e-mail
                </button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={unsetMail}>Remover e-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Conditional;