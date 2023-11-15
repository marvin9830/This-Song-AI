import axios from "axios";

const PORT = 8000;

const URL = `http://192.168.4.158:${PORT}/musixmatch`;
// const URL = "https://mysterious-garden-90298-d115e921537b.herokuapp.com/musixmatch";

export const getLyrics = async (trackName, artists, albumName) => {
  console.log(`Getting lyrics for ${trackName} by ${artists[0].name}`);
  const lyrics = [];

  const parameters = new URLSearchParams([
    ["trackName", trackName],
    ["artistName", artists[0].name],
    ["albumName", albumName]
  ]);

  console.log("Parameters: ", parameters.toString());

  // Await the completion of the `/musixmatch` endpoint from the Node app
  const response = await axios({
    method: "get",
    url: URL,
    params: parameters
  });

  return response;
};