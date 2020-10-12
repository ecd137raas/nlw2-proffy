import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
    <header>
        <img src="https://avatars2.githubusercontent.com/u/26128285?s=460&u=aa3dc77f5686f24497dfdcd2bf361eca3b29bcff&v=4" alt="Duarte"/>
        <div>
            <strong>Emerson Duarte</strong>
            <span>Programação</span>

        </div>
    </header>
    <p>
        Professor de Programação NodeJS.
        <br /> <br />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptas provident animi magni placeat cum mollitia quod veniam perferendis sunt, incidunt amet neque tempora aliquam. Totam optio odio perspiciatis cum.
    </p>
    <footer>
        <p>
            Preço/hora
            <strong>R$ 20,00</strong>
        </p>
        <button type="button">
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
        </button>
    </footer>
</article>

    )
}
export default TeacherItem;
