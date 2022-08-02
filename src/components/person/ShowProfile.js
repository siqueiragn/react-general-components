import style from './Person.module.css';

function ShowProfile({name, age, email, job}) {
    return (
        <div>
            <ul className={style.customList}>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Email: {email}</li>
                <li>Profissão: {job}</li>
            </ul>
        </div>
    )
}

export default ShowProfile;