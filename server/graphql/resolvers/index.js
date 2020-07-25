
const data = {
  portfolios: [
    {
      _id: "sad87da79",
      title: 'Job in Netcentric',
      company: 'Netcentric',
      companyWebsite: 'www.google.com',
      location: 'Spain, Barcelona',
      jobTitle: 'Engineer',
      description: 'Doing something, programing....',
      startDate: '01/01/2014',
      endDate: '01/01/2016'
    },
    {
      _id: "da789ad1",
      title: "Job in Siemens",
      company: "Siemens",
      companyWebsite: "www.google.com",
      location: "Slovakia, Kosice",
      jobTitle: "Software Engineer",
      description: "Responsoble for parsing framework for JSON medical data.",
      startDate: "01/01/2011",
      endDate: "01/01/2013"
    },
    {
      _id: "sadcxv9",
      title: 'Work in USA',
      company: 'WhoKnows',
      companyWebsite: 'www.google.com',
      location: 'USA, Montana',
      jobTitle: 'Housekeeping',
      description: 'So much responsibility....Overloaaaaaad',
      startDate: '01/01/2010',
      endDate: '01/01/2011'
    }
  ]
};

exports.portfolioQueries = {
  hello: () => {
    console.log('e')
    return 'Hello World'
  },
  portfolio: (root, { id }) => {
    const portfolio = data.portfolios.find(p => p._id === id)
    return portfolio
  },
  portfolios: () => data.portfolios,

}

exports.portfolioMutations = {
  createPortfolio: (root, { input }) => {
    const newPortfolio = { ...input };
    const _id = require('crypto').randomBytes(10).toString('hex');
    newPortfolio._id = _id;
    data.portfolios.push(newPortfolio);
    return newPortfolio;
  },
  updatePortfolio: (root, { id, input }) => {
    const index = data.portfolios.findIndex(p => p._id === id);
    const portfolio = data.portfolios[index];
    const newPortfolio = {
      ...portfolio,
      ...input
    };
    data.portfolios[index] = newPortfolio;
    return newPortfolio;
  },
  deletePortfolio: (root, { id, input }) => {
    const index = data.portfolios.findIndex(p => p._id === id);
    const deletedPortfolio = data.portfolios.splice(index, 1)[0];
    return deletedPortfolio;
  }
}