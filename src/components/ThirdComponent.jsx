import PropTypes from "prop-types"

export const ThirdComponent = (props) => {
  return (
    <div>
        <h1>Third Component</h1>
        <ul>
            <li>{ props.name }</li>
            <li>{ props.lastname }</li>
        </ul>
    </div>
  )
}

ThirdComponent.propTypes ={
    name : PropTypes.string,
    lastname: PropTypes.string,
    age: PropTypes.number
}
