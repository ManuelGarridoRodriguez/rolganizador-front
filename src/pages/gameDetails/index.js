import React from "react";
import DetailsCard from "../../components/gameDetails-components/details-card";
import CreatorCard from "../../components/gameDetails-components/creator-card";
import Navigator from "../../components/nav/nav";
import './styles.scss';
import PlayersCard from "../../components/gameDetails-components/players-card";
import ChatCard from "../../components/gameDetails-components/chat-card";

const GameDetails = () => {
  const gameMock = {
    id: "1",
    name: "Partida 1 con nombre muy largo para ver qué pasa",
    description: "Every day is taco ipsum tuesday. Say taco one more time. You see, the refried beans are really just the adhesive necessary to apply the soft tortilla to the hard taco shell. Ooh, with diced onions and a pinch of cilantro. Flour or corn tortillas? Tacos, again? This will be 5 times this week and it’s only Tuesday. Flour or corn tortillas? Shrimp tacos are tasty tacos! It’s taco Tuesday Monday. CARNE ASADA!! Tacos al pastor made with adobada meat. Josh’s taco shack is the best taco shack. Can you put some peppers and onions on that? I’d have to say, those tacos are on fleek. Give me tacos, or give me death. Give me tacos, or give me death. CARNITAS!! It’s raining tacos, from out of the sky, tacos, don’t even ask why. If you were a taco, would you eat yourself? These tacos are lit 🔥. I’d have to say, those tacos are on fleek. Does guac cost extra? Tacos, again? This will be 5 times this week and it’s only Tuesday. It’s taco time all the time.",
    creator: {
      name: "Un señor con peluca",
      img: "https://randomuser.me/api/portraits/lego/3.jpg",
      date: "23/03/2022"
    },
    tags: ["DnD5e", "Terror"],
    participants: [
      {
        name: "UNA SEÑORA SIN PELUCA",
        img: "https://randomuser.me/api/portraits/lego/6.jpg",
      },
      {
        name: "UN PERRO CON SOMBRERO",
        img: "https://randomuser.me/api/portraits/lego/1.jpg",
      },
      {
        name: "UNA SEÑORA SIN PELUCA",
        img: "https://randomuser.me/api/portraits/lego/6.jpg",
      },
      {
        name: "UNA SEÑORA SIN PELUCA",
        img: "https://randomuser.me/api/portraits/lego/6.jpg",
      },
    ],
    comments: [
      {
        message: 'Comentario sarcástico 1fgdggggggggggggggggggggggggggggggggggsdfsfsdfssdfffffffffffffffffffffffffffffsdfffffffffff',
        author: "UNA SEÑORA SIN PELUCA",
        time: "23/04/2022 - 12:00"
      },
      {
        message: "Comentario informativo 2",
        author: "UN PERRO CON SOMBRERO",
        time: "23/04/2022 - 12:10"
      },
      {
        message: "Comentario sin atención 3",
        author: "UN PERRO CON SOMBRERO",
        time: "23/04/2022 - 12:15"
      }
    ],
    image: "https://images.unsplash.com/photo-1653509517330-a5dbac11243f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
  }

  // TODO: si aquí entra un jugador, abandonar partida, si entra el creador eliminar partida
  return (
    <div className="gameDetailsPage">
      <Navigator
        title="Partida de ejemplo"
        titlePhoto={gameMock.image}
        action={{
          actionColor: '#F93D3D',
          actionClick: () => { },
          actionTitle: 'Abandonar',
        }}
      />
      <div className="cardContainer">
        <DetailsCard description={gameMock.description} tags={gameMock.tags} />
        <div className="centralCardContainer">
          <CreatorCard creator={gameMock.creator} />
          <PlayersCard players={gameMock.participants} />
        </div>
        <ChatCard comments={gameMock.comments} />
      </div>
    </div>
  )
}

export default GameDetails;
