import avatar from '../../assets/icons/avatar.svg';
import UsersStore from '../../store/users';
import { useState } from 'react';

type Data = {
	name: string,
	position: string,
	vacation: boolean,
	id: number,
};

const Card = ({ name, position, vacation, id }: Data) => {
	const [userVacation, setUserVacation] = useState(vacation);

	const changeUserVacation = () => {
		userVacation === true ? setUserVacation(false) : setUserVacation(true);
		UsersStore.changeVacation(id, userVacation === true ? false : true);
	};

	return (
		<div className='user'>
			<div className='img'>
				<img src={avatar} alt='' />
			</div>
			<div className='user__data'>
				<h2>{name}</h2>
				<p>{position}</p>
				<label className='checkbox-label'>
					<input type='checkbox' defaultChecked={userVacation} onClick={changeUserVacation} />
					<span className='checkbox-label-switch'></span>
					<span className='vacation'>On vacation</span>
				</label>
			</div>
		</div>
	);
};

export default Card;
