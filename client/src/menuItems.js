export const menuItems = [
    {
      title: 'Home',
      url: '/',
    },
    {
        title: 'View Listings',
        url: '/ViewListings',
      },
    {
      title: 'Dashboards',
      url: '/Dashboards',
      submenu: [
        {
          title: 'Hot Markets',
          url: 'hot-markets',
        },       
        {
          title: 'Check Your Neighborhood',
          url: 'Check-Your-Neighborhood',
        },        
        {
          title: 'Market Trends',
          url: 'market-trends',
        },
      ],
    },
    {
      title: 'About',
      url: '/about',
      submenu: [
        {
          title: 'Who we are',
          url: 'who-we-are',
        },
        {
          title: 'Our values',
          url: 'our-values',
        },
      ],
    },
  ];