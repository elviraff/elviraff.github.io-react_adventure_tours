import { useReducer } from 'react'
import { Button } from '../Button/Button'
import styles from './styles.module.css'
import { Rating } from '../Rating/Rating'
import classnames from 'classnames'

const action = {
    type: "",
    payload:""
}
const InitialState = {
    name: "",
    text: "",
    rating: 1
}

const Actions = {
    setName: "setName",
    setText: "setText",
    setRating: "setRating",
    clear: "clear"
}
const reducer = (state, action) => {
    switch (action.type) {
        case Actions.setName : {
            return {
                ...state,
                name: action.payload
            }
        }
        case Actions.setText : {
            return {
                ...state,
                text: action.payload
            }
        }
        case Actions.setRating : {
            return {
                ...state,
                rating: action.payload
            }
        }
        case Actions.clear : {
            return {
                ...InitialState,
            }
        }
        default:
            return state


    }

}

export const NewReviewForm = () => {
    const [formValue, dispatch] = useReducer(reducer, InitialState);

    return (
        <div className={styles.root}>
            <div className={styles.formControl}>
                <label className={classnames(styles.label)}>Name</label>
                <input 
                type='text' 
                value = {formValue.name}
                onChange = {(event) => {
                    dispatch({type: "setName", payload: event.target.value})
                }}
                />
            </div>
            <div className={styles.formControl}>
                <label className={styles.label}>Text</label>
                <input 
                type='text' 
                value = {formValue.text}
                onChange = {(event) => dispatch({type: "setText", payload: event.target.value})}
                />
            </div>
            <div className={styles.formControl}>
                <label className={styles.label}>Rating</label>
                <Rating 
                value={formValue.rating}
                onChange = {(value) => dispatch({
                            type:Actions.setRating, 
                            payload: value })}
                />
            </div>

            <Button className={styles.button} onClick={() => dispatch({type:"clear"})}> Clear </Button>

        </div>
    )
}