"use client"
import Image from 'next/image'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Carshow from './components/carshow'

export default function Home() {
  return (
    <main className=" ">
      <Suspense fallback={null}>
        <Canvas>
          <Carshow />
        </Canvas>
      </Suspense>
    </main>
  )
}
