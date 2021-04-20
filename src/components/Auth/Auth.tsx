import Input from '../Input/Input';
import { useEffect, useState } from 'react';
import AuthStore from '../../store/auth';

const Auth = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [phone, setPhone] = useState();
    const [amountInvest, setAmountInvest] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState(1);

    const [buttonIsClick, setButtonIsClick] = useState<boolean|null>(null);

    const buttonClick = () => {
        buttonIsClick === false ? setButtonIsClick(true) : setButtonIsClick(false);
    };

    useEffect(() => {
        errors < 1 && AuthStore.login(
            {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                amountInvest: amountInvest,
                email: email,
                password: password,
            }
        );
    }, [errors]);

    return (
        <div className="auth">
            <div className="auth-title">Sign Up</div>
            <div className="auth-form">
                <Input label="First Name"
                       type="text" size="half" onChange={setFirstName} hasError={setErrors}
                       buttonClick={buttonIsClick} />
                <Input label="Last Name"
                       type="text" size="half" onChange={setLastName} hasError={setErrors}
                       buttonClick={buttonIsClick} />
                <Input label="Phone Number"
                       name="phone" type="number" size="half" onChange={setPhone} hasError={setErrors}
                       buttonClick={buttonIsClick} />
                <Input label="Amount to invest"
                       type="number" size="half" onChange={setAmountInvest} hasError={setErrors}
                       buttonClick={buttonIsClick} />
                <Input label="Email Address"
                       name="email" type="email" size="full" onChange={setEmail} hasError={setErrors}
                       buttonClick={buttonIsClick} />
                <Input label="Confirm Email Address"
                       name="confirm-email" type="email" size="full" valueConfirm={email} hasError={setErrors}
                       buttonClick={buttonIsClick} />
                <Input label="Password"
                       name="password" type="password" size="full" onChange={setPassword} hasError={setErrors}
                       buttonClick={buttonIsClick} />
                <Input label="Confirm Password"
                       name="confirm-password" type="password" size="full" valueConfirm={password} hasError={setErrors}
                       buttonClick={buttonIsClick} />
            </div>
            <div className="auth-check">
                <div className="auth-check__item">

                </div>
                <div className="auth-check__item">

                </div>
            </div>
            <div className="auth-button" onClick={buttonClick}>Create Account</div>
        </div>
    )
};

export default Auth;
