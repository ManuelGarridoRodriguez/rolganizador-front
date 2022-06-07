import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import DetailsCard from "../../components/gameDetails-components/details-card";
import CreatorCard from "../../components/gameDetails-components/creator-card";
import Navigator from "../../components/nav/nav";
import './styles.scss';
import PlayersCard from "../../components/gameDetails-components/players-card";
import ChatCard from "../../components/gameDetails-components/chat-card";
import ExitGameModal from "../../components/exit-game-modal";

const GameDetails = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState();
  const [modalInfo, setModalInfo] = useState();
  const [actionButton, setActionButton] = useState();
  const [modalShow, setModalShow] = React.useState(false);
  const [isFromGame, setIsFromGame] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/game/${id}`)
      .then(({ data }) => setGame(data))
  }, [])

  useEffect(() => {
    if (game) {
      const actualUser = localStorage.getItem('user');
      setActionButton(renderButton());
      setIsFromGame(game.creator._id === actualUser || game.participants.some((participant) => participant._id === actualUser));
    }
  }, [game])

  const deleteGame = () => {
    setModalShow(false);
    axios.delete(`http://localhost:3001/game/${id}`).then(() => { navigate('/') });
  }

  const exitGame = () => {
    const cloneGame = { ...game };
    const actualUser = localStorage.getItem('user');
    const newParticipants = cloneGame.participants.filter((participant) => {
      return participant._id !== actualUser
    })
    cloneGame.participants = newParticipants;
    axios.patch(`http://localhost:3001/game/${id}`, cloneGame).then(({ data }) => setGame(data));
    setModalShow(false);
  }

  const joinGame = () => {
    const actualUser = localStorage.getItem('user');
    const joinGames = JSON.parse(localStorage.getItem('joinGames'));

    const petition = {
      game: game._id,
      sender: actualUser,
      receptor: game.creator._id,
      status: 'pending',
    };
    axios.post('http://localhost:3001/petitions', petition).then(() => {
      localStorage.setItem('joinGames', [...joinGames, game._id]);
    });
    setModalShow(false);
  }

  const handleChat = (comment) => {
    const user = JSON.parse(localStorage.getItem('userInfo'));
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);

    const newComment = {
      creator: user.nick,
      message: comment,
      date: today.toDateString(),
    };

    const cloneGame = {...game};
    cloneGame.comments.push(newComment);

    axios.patch(`http://localhost:3001/game/${id}`, cloneGame).then(({data}) => setGame(data));
  }

  const renderButton = () => {
    const actualUser = localStorage.getItem('user');


    if (game.creator._id === actualUser) {
      setModalInfo({
        action: deleteGame,
        title: '¿Deseas eliminar la partida?',
        text: 'Esta acción es irreversible. Se perderá la partida y sus partricipantes. Para recuperarla deberías rehacerla de nuevo.'
      })
      return {
        actionColor: '#F93D3D',
        actionClick: () => setModalShow(true),
        actionTitle: 'Eliminar',
      }
    } else if (game.participants.some((p) => p._id === actualUser)) {
      setModalInfo({
        action: exitGame,
        title: '¿Deseas abandonar la partida?',
        text: ' Si dejas la partida deberás pedir permiso para entrar de nuevo y no tendrás acceso al chat y la información de la misma. ¿Deseas abandonarla?'
      })
      return {
        actionColor: '#F93D3D',
        actionClick: () => setModalShow(true),
        actionTitle: 'Abandonar',
      }
    } else {
      setModalInfo({
        action: joinGame,
        title: '¿Deseas unirte a la partida?',
        text: 'Esto solicitará a la persona que la ha creado acceso a la partida.'
      })
      return {
        actionColor: '#549e39',
        actionClick: () => setModalShow(true),
        actionTitle: 'Unirse',
      }
    }
  }

  return (
    <div className="gameDetailsPage">
      {modalInfo && <ExitGameModal show={modalShow} onHide={() => setModalShow(false)} modalInfo={modalInfo} />}
      {game && <Navigator
        title="Partida de ejemplo"
        titlePhoto={game.image}
        action={actionButton}
      />}
      {game && <div className="cardContainer">
        <DetailsCard description={game.description} tags={game.tags} />
        <div className="centralCardContainer">
          <CreatorCard creator={game.creator} />
          <PlayersCard players={game.participants} />
        </div>
        {isFromGame && <ChatCard comments={game.comments} handleChat={handleChat} />}
      </div>}
    </div>
  )
}

export default GameDetails;