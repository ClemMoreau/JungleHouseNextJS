import type { NextPage } from 'next'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import logo from '../public/logo.png'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navbar'

const Home: NextPage = () => {


  // const savedCart = localStorage.getItem('cart');
  // const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  // useEffect(() => {
  //   localStorage.setItem('cart',JSON.stringify(cart))
  // }, [cart])

  return (
    <div>
      <header className={styles.header}>
        <div>
          Jungle House
        </div>
        <Image src={logo} alt='jungle-house-logo'/>
      </header>
      <NavBar/>
    </div>
  )
}

export default Home
