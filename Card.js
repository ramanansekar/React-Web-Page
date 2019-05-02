import React from 'react';

const Card =({name,email,id}) =>{
	return(
		<div className='tj bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?150x150`} alt='loading....' height='200' width='200' />
				<div>
					<p>{name}</p>
					<p>{email}</p>
				</div>
		</div>

	);
}

export default Card;