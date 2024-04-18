const Title = ({ locked }) => {

  return (
    <h1 className="title">
      {!locked 
      ? "Counter"
      : (<span>LIMIT! BUY <b>PRO FOR</b> &gt;5</span>)}
    </h1>
  )
}

export default Title;