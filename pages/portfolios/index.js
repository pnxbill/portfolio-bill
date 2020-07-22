import Axios from "axios";
import PortfolioCard from "../../components/portfolios/PortfolioCard";

const fetchPortfolios = () => {
  const query = `
      query Portfolios {
        portfolios {
          _id
          title
          company
          companyWebsite
          location
          jobTitle
          description  
          startDate
          endDate
        }
      }
    `;

  return Axios.post(`http://localhost:3000/graphql`, { query })
}

const Portfolios = ({ portfolios }) => {


  return (
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <section className="pb-5">
        <div className="row">
          {portfolios.map(portfolio => {
            return (
              <div key={portfolio._id} className="col-md-4">
                <PortfolioCard portfolio={portfolio} />
              </div>)
          })}

        </div>
      </section>
    </>
  )
}

Portfolios.getInitialProps = async () => {
  const { data: { data: { portfolios } } } = await fetchPortfolios();

  return { portfolios };
}

export default Portfolios;