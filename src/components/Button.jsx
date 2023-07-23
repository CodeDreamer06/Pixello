const Button = ({ isFilled = false, children }) => {
	return <button className={"btn " + (isFilled ? "" : " btn--outline")}>{children}</button>
}

export default Button;