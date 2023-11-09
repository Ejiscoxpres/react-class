  function Profile() {
    return(
        <div>
        
        <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Lekam Lekam"
    />
    <img
     src="https://i.imgur.com/MK3eW3As.jpg"
     alt="Susan Johnson" 
    />
    
    </div>
    );

}

export default function Gallery() {
    return(
        <section>
            <hi>Great Secientist</hi>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            
        </section>
    );
}