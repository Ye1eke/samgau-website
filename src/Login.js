import React, {useState} from 'react'
import './Login.css'
import {
    Link, useNavigate
  } from "react-router-dom";

  import { auth } from './firebase'
import userEvent from '@testing-library/user-event';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const signIn = e => {
      e.preventDefault();
      auth
          .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            history('/')
          })
          .catch(error => alert(error.message))
    }

    const register = e => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        console.log(auth);
        if (auth) {
          history('/');
        }
      }).catch(error => alert(error.message))
    }
  return (
    <div className='login'> 
    

    <div className='login__container'>
        <h1>Вход</h1> 

        <form>
            <h5>Почта</h5>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

            <h5>Пароль</h5>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn}
            className='login__signInButton'>Войти</button>
        </form>

        <p>
            Выполняя вход, вы соглашаетесь с Условиями использования и 
            продажи SAMGAU STORE. Пожалуйста
            см. наше Уведомление о конфиденциальности, 
            наше Уведомление о файлах cookie и наше Уведомление о рекламе 
            на основе интересов.
        </p>

        <button onClick={register} 
        login__registerButton>Создай свой Самгау Аккаунт</button>

    </div>
    </div>
  )
}

export default Login