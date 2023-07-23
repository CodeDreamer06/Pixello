const Badge = ({ positioning, children }) => {
	return <span className="badge" style={positioning}>{children}</span>
}

export default Badge;