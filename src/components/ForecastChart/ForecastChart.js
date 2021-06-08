import React from 'react'
import PropTypes from 'prop-types'

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const ForecastChart = ({ data }) => {
    return (
        <ResponsiveContainer height={250} width={'90%'} >
            <LineChart
                width={700}
                height={250}
                margin={{ top: 20, bottom: 20, right: 5, left: 5 }}
                data = { data }
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dayHour" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="max" stroke="#ff0000" ></Line>
                <Line type="monotone" dataKey="min" stroke="#0000ff" ></Line>
            </LineChart>
        </ResponsiveContainer>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired,
        }),
    ).isRequired,
}

export default ForecastChart
