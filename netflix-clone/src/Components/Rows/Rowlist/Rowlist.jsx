import React from 'react'
import Row from '../Row/Row';
import requests from'../../../utils/requests'
const Rowlist = () => {
  return (
		<>
			<Row
				title="NETFLIX ORIGINALS"
				fetchUrl={requests.fetchNetflixOrginals}
				isLargeRow={true}
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRateOriginals} />
			<Row title="Comedy" fetchUrl={requests.fetchComdyMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="TvShow" fetchUrl={requests.fetchTvShow} />
			<Row title="Documentaries" fetchUrl={requests.fetchDoucumentaries} />
		</>
	);
}

export default Rowlist
