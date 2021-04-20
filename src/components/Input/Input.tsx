import { useEffect, useState } from 'react';
import EyeIcon from '../../assets/icons/eye.svg';

type Props = {
	type: string;
	label: string;
	size: string;
	buttonClick: boolean | null;
	name?: string;
	onChange?: any;
	valueConfirm?: string;
	hasError?: any;
};

const Input = ({
	type,
	label,
	size,
	buttonClick,
	name,
	valueConfirm,
	onChange,
	hasError,
}: Props) => {
	const [value, setValue] = useState('');
	const [isFocus, setIsFocus] = useState(false);
	const [message, setMessage] = useState('');
	const [isError, setIsError] = useState(false);
	const [typeInput, setTypeInput] = useState(type);

	useEffect(() => {
		value.length > 0 ? setIsFocus(true) : setIsFocus(false);
		onChange && onChange(value);
	}, [value]);

	useEffect(() => {
		let errors = 0;
		if (buttonClick !== null) {
			if (value.length < 1) {
				setMessage('Fill field');
				errors++;
				errorTrue();
			} else {
				switch (name) {
					case 'email':
						if (!/\S+@\S+\.\S+/.test(value)) {
							setMessage('Wrong Format');
							errors++;
							errorTrue();
						}
						break;
					case 'confirm-email':
						if (value !== valueConfirm) {
							setMessage('Email mismatch');
							errors++;
							errorTrue();
						}
						break;
					case 'confirm-password':
						if (value !== valueConfirm) {
							setMessage('Password mismatch');
							errors++;
							errorTrue();
						}
						break;
				}
			}
			hasError(errors);
		}
	}, [buttonClick]);

	const errorTrue = () => {
		setIsError(true);
		setIsFocus(true);
	};

	const errorFalse = () => {
		setMessage('');
		setIsError(false);
	};

	const changeTypePassword = () => {
		typeInput === 'password' ? setTypeInput('text') : setTypeInput('password');
	};

	return (
		<div
			className={`input ${size} ${isFocus && 'focused'} ${isError && 'error'}`}
		>
			<input
				type={typeInput}
				onFocus={() => {
					errorFalse();
					setIsFocus(true);
				}}
				onBlur={e => {
					e.target.value === '' && setIsFocus(false);
				}}
				onChange={e => {
					setValue(e.target.value);
				}}
			/>
			{type === 'password' && (
				<img
					src={EyeIcon}
					alt=''
					className='eye-icon'
					onClick={changeTypePassword}
				/>
			)}
			<div className='label'>{message.length > 0 ? message : label}</div>
		</div>
	);
};

export default Input;
