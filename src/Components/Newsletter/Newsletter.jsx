import React from 'react'

const Newsletter = () => {
  return (
    <div className='newsletter-div' id='newsletter-div'>
      <h1 className="heading">GET IN TOUCH</h1>
      <p>Recevez en avant prémiere toute l'actualité et les nouveautés #WeedFC</p>
      <form className='newsletter-form'>
        <input type="text" name="name" id="name" placeholder='Prénom' />
        <input type="email" name="name" id="name" placeholder='E-mail' />
        <textarea name="text" id="" cols="30" rows="10" placeholder='Your message'></textarea>
        <div className='checkbox-div'>
          <input type="checkbox" name="checkbox" id="" checked />
          <label htmlFor="checkbox">J'accepte de recevoir la newsletter.</label>
        </div>
        <button className='inscription-nl'>Envoyer</button>
      </form>
    </div>
  )
}

export default Newsletter