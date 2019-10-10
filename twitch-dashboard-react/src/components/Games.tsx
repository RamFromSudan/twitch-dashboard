import React, {useState, useEffect} from 'react';
import api from '../api';
import {Link} from 'react-router-dom';
import './Games.scss'

interface Data {
  id: string;
  name: string;
  box_art_url: string;
}

function Games() {
  const [games, setGames] = useState<Data[]>();


  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      let dataArray: Data[] = result.data.data;
      dataArray.map(game => {
        let newUrl = game.box_art_url
        .replace('{width}', '500')
        .replace('{height}', '600');
        game.box_art_url = newUrl;
      });

      setGames(dataArray);
    }  

    fetchData();
  });

  return <div><div className="main-title">Most Popular Games</div>
    <div className="container">
      <div className="row">
        {games !== undefined &&
          games.map(game => (
            <div className="col-4">
              <div className="card">
                <img src={game.box_art_url} className="card-img-top"/>
                <div className="card-body">
                  <h5 className="card-title">
                    {game.name}
                  </h5>
                  <button className="btn btn-success">
                    <Link className="link"
                    to={{
                      pathname: "/game" + game.id,
                      state: {
                        gameId: game.id
                      }
                    }}>
                    {game.name} streams
                    </Link> 
                  </button>
                </div>
              </div>
            </div>
        ))}
      </div>
    </div>;
  </div>
}

export default Games;