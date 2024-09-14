import './chooseResons.css'
const ChooseReasons = ({data}) => {
  return (
    <>
    <div className='content' style={{display : "flex",  flexDirection: data.direction === "row" ? "row" : "row-reverse"  }}>
          <div className='wcuImageContainer'>
            <img src={require('../../assets/'+data.imageName+'.png')} alt="" />
          </div>
          <div>
            <p className="mainPara">{data.para1}</p>
            <p className='mainParaTag'>
             {data.para2}
            </p>
            <button className="contentButton">
                {data.buttonName}
            </button>
          </div>
        </div>
    </>
  )
}

export default ChooseReasons