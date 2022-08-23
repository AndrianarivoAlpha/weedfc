import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter-div'>
        <h1 className="heading">Newsletter</h1>
        <p>Recevez en avant prémiere toute l'actualité et les nouveautés #WeedFC</p>
        <form className='newsletter-form'>
            <input type="text" name="name" id="name" placeholder='Prénom'/>
            <input type="text" name="name" id="name" placeholder='Nom'/>
            <input type="email" name="name" id="name" placeholder='e-mail'/>
            <div className='checkbox-div'>
                <input type="checkbox" name="checkbox" id="" checked/>
                <label htmlFor="checkbox">J'accepte de recevoir la newsletter.</label>
            </div>
            <button className='inscription-nl'>je m'inscris à la newsletter</button>
        </form>
    </div>
  )
}

export default Newsletter