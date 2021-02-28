import React, {useState, useEffect} from 'react';
import Card from "./Card";

const Cards = ({ todos, handleTodo, handleFavorite }) => todos.map((item) => <Card key={item.id} item={item} handleItem={handleTodo} handleFavorite={handleFavorite}/>)

export default Cards;
