import { NativeBaseProvider } from 'native-base'
import React from 'react'
import SignUp from './src/screens/SignUp'

export default function App() {
  return (
    <NativeBaseProvider>
      <SignUp />
    </NativeBaseProvider>
  )
}