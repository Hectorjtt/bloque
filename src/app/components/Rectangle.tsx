interface RectangleProps {
    color: string;
}

export default function Rectangle({color}: RectangleProps){
    return <div style={{backgroundColor: color}} className= "w-16 h-16"></div>;
}




