import Header from '@/components/Modules/Header/Header'
import ReservationForm from '@/components/Templates/Reservation/ReservationForm'
import React from 'react'

export default function Reservation() {
  return (
    <>
      <Header route={'Reservation'} />
      <ReservationForm />
    </>
  )
}
