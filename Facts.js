// function retrieves a facts
async function getFacts(){
  const limit = 3; //limits to three facts
  const api_endpoint = `https://api.api-ninjas.com/v1/facts?limit=${limit}`;
  const response = await fetch(api_endpoint, {
      headers: {
          'X-API-Key': 'OAYHzh1ziw+jgCl+y5HDXA==nFs4joNeT4dQxDwj'
      }
  });
  const json_response = await response.json();

  console.log(json_response);
  return json_response;
}

async function showFacts(){
  const factsResponse = await getFacts();
  const paragraphTag = document.getElementById("facts");
  //paragraphTag.innerText = JSON.stringify(factsResponse);
  paragraphTag.innerText = factsResponse.map(fact => fact.fact).join('\n');
  //API KEY: OAYHzh1ziw+jgCl+y5HDXA==nFs4joNeT4dQxDwj
}