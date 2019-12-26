import React from 'react';


class CategoryInfoScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            workouts:[],
            doneLoadingWorkouts: false
        }
    }

    loadWorkouts(){
        const thisComp = this;
        fetch()
    }
}