'use client'
import {useAuth} from '@clerk/nextjs';
import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const LandingHero = () => {
    const {isSignedIn} = useAuth()
    return (
        <div className='text-white font-bold py-20 text-center space-y-5'>
                <div className='flex justify-center'>
                    <Image
                    width="120"
                    height="120"
                    alt='mascot'
                    src='/rabbit_stand.svg' />
                </div>
            <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
                <h1>Craft your AI Services</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-sky-500">
                    <TypewriterComponent
                    options={{
                       strings: [
                        'Chatbot.',
                        'Customer Support',
                        'Prompt Template',
                        'Content Generator.',
                        'Video Generator.'
                       ] ,
                       autoStart: true,
                       loop: true
                    }} />
                </div>

            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
                Empower your business and this world.
            </div>
            <div>
                <Link href={isSignedIn ? '/dashboard':'/sign-up'}>
                    <Button variant='default' className='bg-gradient-to-r from-blue-900 to-sky-500 md:text-lg p-4 md:p-6 rounded-full font-semibold' >
                        Start Create for Free
                    </Button>
                </Link>
            </div>
            <div className='text-zince-400 text-xs md:text-sm font-normal'>
                No credit card required.

            </div>
        </div>
    )
}