const theday= new Date();
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-Us',
        {weekday: 'long'}
    ).format(date);

}
export default function Daily(){
    return(
        <h1>Daily Activities For {formatDate(theday)}</h1>
    )
}