import Card from '../Card/Card';
import UsersStore from '../../store/users';
import { observer } from 'mobx-react-lite';

const App = observer(() => {
	return (
		<div className='app'>
			{
				UsersStore.users.map((user: {id: number, name: string, position: string, vacation: boolean}, key: number) =>
					<Card
						name={user.name}
						position={user.position}
						vacation={user.vacation}
						id={user.id}
						key={key}
					/>
				)
			}
		</div>
	);
});

export default App;
