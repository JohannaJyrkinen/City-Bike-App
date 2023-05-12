import React, {useEffect, useState} from "react";

import 'bootstrap/dist/css/bootstrap.css'
import { Card, Row, Col, Container } from 'react-bootstrap'
import axios from "axios";


export function StationStatistics({id}) {


    const [statistics, setStatistics] = useState(null)

    useEffect(() => {
        getStatistics();
      }, []);

    const getStatistics = async () => {
        try {
          const response = await axios.get(`http://localhost:3001/api/statistics?stationid=${id}`);
          const data = response.data
          setStatistics(data);
          console.log(data)
        } catch (err) {
          console.log(err);
        }
        
      };
    
     
    return (
        
        <>
            {statistics && (
                <>
                  <Card.Text>Departures Amount: {statistics.departuresAmount}</Card.Text>
                  <Card.Text>Returns Amount: {statistics.returnsAmount}</Card.Text>
                </>
              )}

        </>
     
        
          
          
    )
}