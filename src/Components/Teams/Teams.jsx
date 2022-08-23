import React from 'react'
import { RiTeamLine } from "react-icons/ri";


const Teams = () => {

    const players = [
      {
        name: "Alpha",
        num: "09",
        post: "Attaquant",
        profileImg: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/weedfc-teams%2Falpha.jpg?alt=media&token=ba9ed994-bbfb-4359-bb88-58bd8c1265f4"
      },
      {
        name: "Badoda",
        num: "04",
        post: "Défense",
        profileImg: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/weedfc-teams%2Fbadoda.jpg?alt=media&token=0bd44831-171a-468a-8bc7-9920eb140092"
      },
      {
        name: "Baban'Jao",
        num: "07",
        post: "Libero",
        profileImg: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/weedfc-teams%2Fbbj.jpg?alt=media&token=8c4243a4-cc2f-497d-88a3-79ff3ee06de8"
      },
      {
        name: "Kely",
        num: "06",
        post: "Attaquant",
        profileImg: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/weedfc-teams%2Fkely.jpg?alt=media&token=29e5e282-50fd-4ecc-bf3d-063381537a7d"
      },
      {
        name: "Laurent",
        num: "11",
        post: "Attaquant",
        profileImg: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/weedfc-teams%2Flaurent.jpg?alt=media&token=7cc32972-138e-47d1-af72-9c804f7a0c10"
      },
      {
        name: "Rafen",
        num: "05",
        post: "Défense",
        profileImg: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/weedfc-teams%2Frafen.jpg?alt=media&token=0e857de1-af71-4f0f-8fb7-63695406e728"
      },
      {
        name: "Mbazoze",
        num: "10",
        post: "Attaquant",
        profileImg: "https://firebasestorage.googleapis.com/v0/b/fir-new-e6eea.appspot.com/o/weedfc-teams%2Ftah.jpg?alt=media&token=029ca02f-cc64-417f-97f6-7545530936f7"
      },
      
    ]

  return (
    <div className='teams-div'>
        <div className="title-div">
        <RiTeamLine style={{
          fontSize: "4rem",
          color: "white"
        }}/>
        <h1>Les teams</h1>
      </div>

      <div className="player-cards">
        {
          players.map((player) => {
            return (
              <div className="player-card" key={player.num}>
                <img src={player.profileImg} alt="" />
                <p className="name">{ player.name }</p>
                <p className='post'>
                  <span>{player.num}. </span>
                  { player.post }
                </p>
              </div>
            )
          })
        }
      </div>
    
    </div>
  )
}

export default Teams