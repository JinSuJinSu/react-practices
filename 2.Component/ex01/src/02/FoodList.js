import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

export default class FoodList extends Component{
    render(){
        // const components = [];
        // this.props.foods.forEach(function(food){
        //     components.push(<FoodListItem name=food.name : quantity=food.quantity/>)
        // });
        return (
            <ul>
                {this.props.foods.map((food)=><FoodListItem 
                                                name={food.name} 
                                                quantity={food.quantity}/>)}      
            </ul>
        );
    }
}

