import React, {useState} from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import Details from './details'

const Index = () => {
	const [id, setId] = useState(0)
	const [name, setName] = useState('')

	fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))

	// showCards() {}
	const profile = 'This is my profile'
	
	return (
		<div>
			<Container>
				<Card>
					<div className="header">
						{/* {for x in profile} */}
						<Button>Show</Button>
						<Details></Details>
					</div>
					<p key={id}>This is the Id</p>
				</Card>
			</Container>
		</div>
	)
}

export default Index;