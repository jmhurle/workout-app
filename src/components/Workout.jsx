import React from 'react'
import ExerciseCard from './ExerciseCard';
import SectionWrapper from './SectionWrapper';

export default function Workout(props) {
    const { workout } = props;

    return (
        <SectionWrapper id={'workout'} header={"welcome to"} title={['The', 'DANGER', 'ZONE']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exercise, index) => {
                    return (
                        <ExerciseCard exercise={exercise} index={index} key={index} />
                    )
                })}
            </div>
        </SectionWrapper>

    )
}
