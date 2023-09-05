import React from 'react'
import getUser from '@/app/lib/getUser'
import getUserPosts from '@/app/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import { Metadata } from 'next'
type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: {userId}} : Params) : Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData

    return {
        title: user.name,
        description: `This is the page of a ${user.name}`
    }
}

export default async function UserMainPage({params: {userId}}: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Posts[]> = getUserPosts(userId)
    const user = await userData
    
    return (
        <>
            <h2>{user.name}</h2>
            <br />
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData}/>
            </Suspense>
            
        </>
    )
}
