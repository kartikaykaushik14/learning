const Home = () => {

    const handleClick = () => {
        console.log('My name is Dom');
    }

    const handleClickAgain = (name) => {
        console.log('My name is ' + name);
    }

    return ( 
        <div className="home">
            <h1>HomePage</h1>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {
                handleClickAgain('Bob')}}>Click Again</button>
        </div>
     );
}
 
export default Home;