export default function Avail () {
    const avail='https://i.imgur.com/7vQD0fPs.jpg'
    const description='Hassan Emile'
    return(
        <img 
        className='avail'
        src= {avail}
        alt={description}
        />
    );
}