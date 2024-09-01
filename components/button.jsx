import React from 'react';

const StyledButton = ({ btnText , handleClick , args = {} , invertTheme = false , themeColor = 'red' , size='medium' }) => {
    let fontMargin = '';
    switch(size){
        case 'small':
            fontMargin = 'text-sm font-light p-2';
            break;
        case 'medium':
            fontMargin = 'text-xl font-medium p-3';
            break;
        case 'large':
            fontMargin = 'text-xl font-semibold p-8';
            break;
        default:
            fontMargin = 'text-base font-normal p-4';
    }

    let fontColor, bgColor, hoverFontColor, hoverBgColor;

    switch(themeColor){
        case 'red':
            fontColor = invertTheme ? 'text-red-600' : 'text-white';
            bgColor = invertTheme ? 'bg-white' : 'bg-red-600';
            hoverFontColor = invertTheme ? 'hover:text-white' : 'hover:text-red-600';
            hoverBgColor = invertTheme ? 'hover:bg-red-600' : 'hover:bg-white';
            break;
        case 'blue':
            fontColor = invertTheme ? 'text-blue-600' : 'text-white';
            bgColor = invertTheme ? 'bg-white' : 'bg-blue-600';
            hoverFontColor = invertTheme ? 'hover:text-white' : 'hover:text-blue-600';
            hoverBgColor = invertTheme ? 'hover:bg-blue-600' : 'hover:bg-white';
            break;
        case 'green':
            fontColor = invertTheme ? 'text-green-600' : 'text-white';
            bgColor = invertTheme ? 'bg-white' : 'bg-green-600';
            hoverFontColor = invertTheme ? 'hover:text-white' : 'hover:text-green-600';
            hoverBgColor = invertTheme ? 'hover:bg-green-600' : 'hover:bg-white';
            break;
        case 'purple':
            fontColor = invertTheme ? 'text-purple-600' : 'text-white';
            bgColor = invertTheme ? 'bg-white' : 'bg-purple-600';
            hoverFontColor = invertTheme ? 'hover:text-white' : 'hover:text-purple-600';
            hoverBgColor = invertTheme ? 'hover:bg-purple-600' : 'hover:bg-white';
            break;
        default:
            fontColor = invertTheme ? 'text-red-600' : 'text-white';
            bgColor = invertTheme ? 'bg-white' : 'bg-red-600';
            hoverFontColor = invertTheme ? 'hover:text-white' : 'hover:text-red-600';
            hoverBgColor = invertTheme ? 'hover:bg-red-600' : 'hover:bg-white';
    }

    return (
        <div>
            <div className={`min-w-40 px-8 ${fontMargin} ${fontColor} ${bgColor} ${hoverFontColor} ${hoverBgColor} rounded-full text-center`}>
                <button onClick={(e) => handleClick(e, args)}>{btnText}</button>
            </div>
        </div>
    );
}

export default StyledButton;
