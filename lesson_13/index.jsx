import React from 'react';
import ReactDOM from 'react-dom';

const styles =  (backgroundColor = 'red', borederRadius = 0) => {
	let myStyles = {
		display: 'inline-flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '100px',
		width: '100px',
		borderRadius: `${borederRadius}`,
		backgroundColor: `${backgroundColor}`,
		margin: '10px'
	}

	return myStyles;
}

function Circle ({backgroundColor, borederRadius, children}) {
    const addition =
	children
	? <div>{children}</div>
    : null
    
    return (
		<div style={ styles(backgroundColor, borederRadius) }>
			{ addition }
		</div>
	)
 }

  function Rect ({backgroundColor, borederRadius, children}) {
    const addition =
	children
	? <div>{children}</div>
    : null

    return (
		<div style={ styles(backgroundColor, borederRadius) }>
			{ addition }
		</div>
	)
    }

    function Address ({country, city, street, location}) {
        return (
            <address>
                <div>{country}</div>
                <div>{city}</div>
                <div>{street}</div>
                <div>
                    <a href={`https://www.google.com/maps/@${location.lat},${location.lng},18.01z`}>Location</a>
                </div>
            </address>
        )
    }

function Header () {
    return (
        <div>
            <header style={{
                textAlign: "center"
            }}>
                <h1>It's header</h1>
            </header>
        </div>
    )
}

function Content () {
    return (
        <div className='main' 
        style = {{backgroundColor: "#00ffcc",
        display: "inline-flex",
        flexDirection: "row",
        width: "70%",
        minHeight: "800px"}} 
        >
            <Circle backgroundColor="lightgreen" borederRadius="50%">
                it's a circle
            </Circle>
            <Rect backgroundColor="lightblue">
                it's a rect
            </Rect>
            And some context text
        </div>
    )
}

function SideBar () {
    return (
        <div style={{
            display: "inline-flex",
            flexDirection: "row",
            backgroundColor: "#00ffff",
            width: "30%",
            minHeight: "800px"
        }}>
        Some text for side bar
        </div>
    )
}

function Footer () {
    return (
        <footer style={{textAlign:"center"}}>
            <Address country='Ukraine' 
            city='Poltava' 
            street='Sobornosti'
            location={{lat: 49.5969267, lng: 34.5344531}}></Address>
        </footer>
    )
}

  ReactDOM.render((
    <div>
   <Header/>
   <Content/>
   <SideBar/>
   <Footer/>
</div>
), document.getElementById('root')
);