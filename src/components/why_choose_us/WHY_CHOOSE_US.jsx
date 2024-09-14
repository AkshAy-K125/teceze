import './why_choose_us.css'
import { ChooseReasons } from  '../../components'

const WHY_CHOOSE_US = () => {
  return (
    <>
      <div className="whuContainer">
        <div className='marginWrapperWCU'>
          <div className='wcuHeader'>
            Why choose us <hr />
          </div>
          <ChooseReasons data={{
            para1 : "Solution tailored specifically to your Buisiness needs",
            para2 : " We provide customised solutions for your business needs, ensuring relavance and success",
            buttonName :"Read More",
            direction : "row",
            imageName : 'wcu1'
          }}  />
          <ChooseReasons data={{
            para1 : "Creative excellence elavates every project",
            para2 : "Creative exellence drives our work. From concept ro execution, we aim for exceptional results",
            buttonName :"Read More",
            direction : "reverse",
            imageName : 'wcu2'
          }}  />
          <ChooseReasons data={{
            para1 : "Client Satisfaction is our Main Focus",
            para2 : "Our main goal is our satisfaction, and we work tirelessly to ensure that you are pleased with the results we achieve together",
            buttonName :"Read More",
            direction : "row",
            imageName : 'wcu3'
          }}  />
        </div>
      </div>
    </>
  );
};

export default WHY_CHOOSE_US;
