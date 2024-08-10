import React from 'react'
import { useState } from 'react';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import Button from './Button';
import SectionWrapper from './SectionWrapper'


function Header(props) {
    const {index, title, description} = props;

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-bold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-lg md:text-xl sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

export default function Generator(props) {
    const { poison, setPoison, muscles, setMuscles, goal, setGoal, updateWorkout } = props;
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }

        setMuscles([...muscles, muscleGroup]);
        if (muscles.length === 2) {
            setShowModal(false)
        }
    }

    return (
        <SectionWrapper id={'generate'} header={"generate your workout"} title={['It\'s', 'Huge', 'O\'Clock']}>
            <Header index={'01'} title={'Pick your poison'} description={'Select your workout'}/>
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-12 '>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button key={typeIndex} className={'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 text-xl ' + (type === poison ? 'border-blue-600' : 'border-blue-400')}
                            onClick={() => {
                                setMuscles([])
                                setPoison(type)
                            }}
                        >
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Header index={'02'} title={'Find your target'} description={'Select the muscles you want to target'}/>
            <div className='bg-slate-950 py-3 border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button 
                    className='relative flex items-center justify-center text-xl p-3'
                    onClick={toggleModal}
                >
                    <p className='capitalize text-2xl'>{muscles.length == 0 ? 'Select muscle groups' : muscles.join(' | ')}</p>
                    <i className="fa-solid fa-caret-down absolute right-3 top-1/2 -translate-y-1/2"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button key={muscleGroupIndex} className={'hover:text-blue-400 duration-200 px-4 ' + (muscles.includes(muscleGroup) ? 'text-blue-400' : '')}
                                    onClick={() => {
                                        updateMuscles(muscleGroup)
                                    }}
                                >
                                    <p className='uppercase text-xl'>{muscleGroup.replaceAll('_', " ")}</p>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>

            <Header index={'03'} title={'Pinpoint Goal'} description={'Select your goal'}/>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-12 '>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button key={schemeIndex} className={'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 text-xl px-4 ' + (scheme === goal ? 'border-blue-600' : 'border-blue-400')}
                            onClick={() => {
                                setGoal(scheme)
                            }}
                        >
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
        <Button func={updateWorkout} text={'Generate Workout'} />
        </SectionWrapper>
  )
}
