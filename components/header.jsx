import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex flex-row my-4'>
                <div className='basis-1/5'>
                    <div className='text-4xl font-semibold text-red-600'>
                        <Link href='/'>QuizStart</Link>
                    </div>
                </div>

                <div className='basis-2/5'></div>

                <div className='basis-2/5 content-center'>
                    <div className='flex flex-row mx-4 gap-x-12'>
                        <div className='basis-1/3 text-xl font-medium text-red-600 hover:text-white hover:bg-red-600 text-center py-1 rounded-full'>
                            <Link href='/about'>About</Link>
                        </div>

                        <div className='basis-1/3 text-xl font-medium text-red-600 hover:text-white hover:bg-red-600 text-center py-1 rounded-full'>
                            <Link href='/quiz'>Take Quiz</Link>
                        </div>

                        <div className='basis-1/3 text-xl font-medium text-red-600 hover:text-white hover:bg-red-600 text-center py-1 rounded-full'>
                            <Link href='/contact'>Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
