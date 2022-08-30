import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import cars from '../cars.json' // remove this

const Home = (props) => {
    return (
        <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            {props.cars.map((car, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{car.name.toUpperCase()}</span>
                        <ul>
                        <li>Miles per Gallon: {car["mpg"]}</li>
                        <li>Cylinders: {car["cylinders"]}</li>
                        <li>Horsepower: {car["horsepower"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home