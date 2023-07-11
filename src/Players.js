import React, { Component } from "react";
import { Players } from "./shared/ListOfPlayers"
import { Link } from "react-router-dom";
import { Icon,CardTitle, Row, Col, Card, Container } from "react-materialize";

export default function player() {
  //   const[player, setPlayer]= useState([])
  return (
    <Container>
    <Row>
        {Players.map((player) =>
            <Col
            l={4}
                m={6} 
                s={12}
            >
                <Card
                    actions={[
                        <Link to={`detail/${player.id}`}>
                            <><>Detail</></>
                        </Link>]}
                    header={<CardTitle image={player.img}></CardTitle>}
                >
                    {player.name}
                </Card>
            </Col>
        )}
    </Row>
</Container>

  )
}
