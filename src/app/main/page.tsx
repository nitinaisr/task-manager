'use client'
import React from 'react'
import { checkLoginStatus } from '@/app/utils';

type Props = {}

const main = () => {
    checkLoginStatus();

  return (
    <div>main</div>
  )
}

export default main;