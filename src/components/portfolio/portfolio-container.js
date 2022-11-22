import PortfolioItem from "./portfolio-items";

 const PortfolioContainer = () => {


    const handleitems = () => {
        const data = ['fries', 'bluebox'];
        
        return data.map(item=>{
            return <PortfolioItem/>
        })
    }



    return (
        <div>
          <h2>Portfolio items go here updated...</h2>
  
          {handleitems()}
        </div>
      );
    }
  

  export default PortfolioContainer;