import React, { Dispatch, useState } from 'react'
import './payment.css'
import noLogo from '../../../../assets/img/icons/no-logo.png'
import visa from '../../../../assets/img/icons/visa.png'
import mscd from '../../../../assets/img/icons/mastercard.jpg'
import amex from '../../../../assets/img/icons/americanExpress.png'
import { useDispatch } from 'react-redux'
import { setPayment } from '../../../../store/slices/paymentSlice'

type FormValidType = {
  [index: string]: boolean;
  name: boolean,
  number: boolean,
  address: boolean,
  email: boolean,
  cardNumber: boolean,
  period: boolean,
  cvv: boolean,
}

export default function Payment({}) {
  const [name, setName] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [period, setPeriod] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [formValid, setFormValid] = useState<FormValidType>({
    name: true,
    number: true,
    address: true,
    email: true,
    cardNumber: true,
    period: true,
    cvv: true,
  });
  const [cardLogo, setCardLogo] = useState(noLogo)

  const handleSetName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }
  const handleSetNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumber(e.target.value)
  }
  const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
  }
  const handleSetAddress = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAddress(e.target.value)
  }
  const handleSetCardNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const number = e.target.value
    if (number.length < cardNumber.length || number[number.length - 1] !== ' ' && !isNaN(Number(number))) {
      setCardNumber(number)
    }
    switch (number[0]) {
      case '4':
        setCardLogo(visa);
        break;
      case '3':
        setCardLogo(amex);
        break;
      case '5':
        setCardLogo(mscd);
        break;
      default:
        setCardLogo(noLogo);
    }
  }
  const handleSetPeriod = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const lastSign = e.target.value[e.target.value.length - 1];
    const isLastNumber = !isNaN(Number(lastSign))
    if (isLastNumber) {
      if (period.length === 2 && e.target.value.length === 3) setPeriod(period + '/' + lastSign);
      else setPeriod(e.target.value)
    } else {
      if (lastSign === '/' && e.target.value.length === 3) {
        setPeriod(period.substring(0, 2))
      }
    }
    if (lastSign === undefined) {
      setPeriod('')
    }
  }
  const handleSetCvv = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const number = e.target.value
    if (number.length < cvv.length || number[number.length - 1] !== ' ' && !isNaN(Number(number))) {
      setCvv(number)
    }
  }

  const validName = (name: string): boolean => {
    return name.split(' ').every((el) => el.length >= 3)
  }

  const validNumber = (number: string): boolean => {
    return !!number.match(/^\+[0-9]{9,}$/);
  }

  const validEmail = (email: string): boolean => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi
    return !!email.match(regex);
  }

  const validAddress = (address: string): boolean => {
    return address.split(' ').length >= 3 ? address.split(' ').every((el) => el.length >= 5) : false;
  }

  const validCardNumber = (cardNumber: string): boolean => {
    return cardNumber.length === 16
  }

  const validPeriod = (period: string): boolean => {
    return Number(period.split('/')[0]) <= 12 && period.length === 5
  }

  const validCvv = (cvv: string): boolean => {
    return cvv.length === 3;
  }


  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setFormValid({
      name: validName(name),
      number: validNumber(number),
      email: validEmail(email),
      address: validAddress(address),
      cardNumber: validCardNumber(cardNumber),
      period: validPeriod(period),
      cvv: validCvv(cvv)
    });
  }

  const dispatch  = useDispatch();

  const handleClosePayment = (e : React.MouseEvent) : void => {
    if(e.target === e.currentTarget) dispatch(setPayment(false));
  }
  return (
    <div className='payment' onClick={handleClosePayment}>
      <form className='payment__form'>
        <h2 className='form-heading'>Personal details</h2>
        <div className='personal-form'>
          <div>
            <input
              className='personal-input'
              placeholder='Name Surname'
              value={name}
              onChange={handleSetName}
            />
            <p className='error'>
              {formValid.name ? '' : 'Error'}
            </p>
          </div>
          <div>
            <input
              className='personal-input'
              placeholder='Phone Number'
              value={number}
              onChange={handleSetNumber}
            />
            <p className='error'>
              {formValid.number ? '' : 'Error'}
            </p>
          </div>
          <div>
            <input
              className='personal-input'
              placeholder='E-mail'
              value={email}
              onChange={handleSetEmail}
            />
            <p className='error'>
              {formValid.email ? '' : 'Error'}
            </p>
          </div>
          <div>
            <input
              placeholder='Dileviry Address'
              value={address}
              className='personal-input'
              onChange={handleSetAddress}
            />
            <p className='error'>
              {formValid.address ? '' : 'Error'}
            </p>
          </div>

        </div>
        <h2 className='form-heading'>Card details</h2>
        <div className='card-form'>
          <div className='card-number-details'>
            <img className='card-type-img' src={cardLogo} />
            <input
              className='card-input'
              placeholder='Card number'
              maxLength={16}
              value={cardNumber}
              onChange={handleSetCardNumber}
            />
          </div>
          <div className='card-other-details'>
            <div>
              <p>Valid:</p>
              <input
                className='card-input'
                maxLength={5}
                placeholder='Validity period'
                value={period}
                onChange={handleSetPeriod}
              />
            </div>
            <div>
              <p>CVV:</p>
              <input
                maxLength={3}
                className='card-input'
                placeholder='Code'
                value={cvv}
                onChange={handleSetCvv}
              />
            </div>
          </div>
        </div>
          <div className='card-errors'>
            <p className='error'>
              {formValid.cardNumber ? '' : 'Invalid card number'}
            </p>
            <p className='error'>
              {formValid.period ? '' : 'Invalid card period'}
            </p>
            <p className='error'>
              {formValid.cvv ? '' : 'Invalid card cvv'}
            </p>
          </div>
        <button onClick={handleConfirm} className='confirm-btn'>
          Confirm
        </button>
      </form>
    </div>
  )
}
