import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = {firstName: 'PULA', lastName: "JSM", email: 'marianmatei434@gmail.com'}
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn.firstName || ''}
                    subtext="Are you ready to manage your funds in the most efficent way? Let's get started!" />

                    <TotalBalanceBox 
                        accounts = {[]}
                        totalBanks = {1}
                        totalCurrentBalance = {1250.35}
                    />
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance : 12}, {currentBalance : 12121}]}
            />
        </section>
    )
}

export default Home