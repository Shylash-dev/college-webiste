import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img onClick={() => setPlayState(true)} src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis nihil voluptatibus quae voluptas. Explicabo hic aut harum fugiat dolores voluptatem unde adipisci! Veritatis assumenda doloremque culpa fugiat quas, ipsum ipsa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis nihil beatae quam delectus magni, quae provident dolores commodi voluptatibus excepturi nemo possimus debitis quidem sequi veritatis optio iste rerum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam. Suscipit odit eveniet praesentium doloremque amet culpa iste, ipsum quibusdam sit inventore non exercitationem rerum nam autem neque consequatur. Optio!</p>
            </div>
        </div>
    )
}

export default About