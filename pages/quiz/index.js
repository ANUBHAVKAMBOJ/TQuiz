import StyledButton from '@/components/button';
import Header from '@/components/header';
import RandomQuizSelection from '@/components/randomquizselection';
import React from 'react';

const Quiz = () => {
    return (
        <div className='mx-32 h-screen'>
            <Header/>

            <div className='h-full'>
                <RandomQuizSelection/>
            </div>

            {/* <div className='flex-col h-full mt-8'>
                <div className='flex-col bg-red-600 h-1/3 text-white text-center w-full content-center '>
                    <div className='text-4xl font-bold'>
                        Choose your Taste
                    </div>

                    <div className='mt-8 mx-40 text-base font-medium'>
                        There are 2 options provided. You can either opt for <i>Mixed</i> quiz having questions from all categories and all difficulty level. Through <i>Customized</i> option, you can mould your quiz having questions from chosen technologies and chosen difficulty level. 
                    </div>
                </div>

                <div className='flex gap-x-60 justify-center mt-20'>
                    <StyledButton handleClick={(a, b) => console.log('Random Quiz')} btnText={'Random Quiz'} invertTheme={true}/>
                    
                    <StyledButton handleClick={(a, b) => console.log('Customized Quiz')} btnText={'Customized Quiz'} invertTheme={true}/>
                </div>

            </div> */}
        </div>
    );
}

export default Quiz;
