  function Profile() {
    return(
        <div>
    <img
     src="https://i.imgur.com/MK3eW3As.jpg"
     alt="Susan Johnson" 
    />
   <img 
     src="https://i.imgur.com/lICfvbD.jpg"
     alt="Lekam Lekam" 
   />

    </div>
    
    );

}

export default function Gallery() {
    return (
        <section>
            <h1>Great Secientist</h1>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            
        </section>
    );
}