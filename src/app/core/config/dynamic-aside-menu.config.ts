export const DynamicAsideMenuConfig = {
  items: [
    /*{
      title: 'Humo',
      root: true,
      bullet: 'dot',
      icon: 'flaticon2-architecture-and-city',
      svg: './assets/media/svg/icons/Design/Layers.svg',
      page: '/humo'
,
    /!*  title: 'Humo',
      bullet: 'dot',
      page: '/humo',
      mega: true,*!/
      submenu: [
        {
          title: 'Humo Terminal',
          bullet: 'dot',
          page: 'humo/terminal',
        },
        {
          title: 'Humo Merchant',
          bullet: 'dot',
          page: 'humo/merchant',
        },
        {
          title: 'Humo Contact',
          bullet: 'dot',
          page: 'humo/contact',
        }
      ]
    },*/
    {
      title: 'Humo',
      bullet: 'dot',
      page: '/humo',
      mega: true,

      submenu: [
        {
          title: 'Humo',
          submenu: [
            {
              title: 'Humo Terminal',
              bullet: 'dot',
              page: '/humo',
            },
            {
              title: 'Humo Merchant',
              bullet: 'dot',
              // page: '/humo/merchant',
              page: 'humo/merchant',
            },
            {
              title: 'Humo Contract',
              bullet: 'dot',
              page: '/humo/contract'
            },
            {
              title: 'Client List',
              bullet: 'dot',
              page: '/humo/client'
            }
          ]
        }
      ],
    },
    {
      title: 'Uzcard',
      bullet: 'dot',
      page: '/uzcard',
      mega: true,

      submenu: [
        {
          title: 'Uzcard',
          submenu: [
            {
              title: 'Uzcard Terminal',
              bullet: 'dot',
              page: '/uzcard',
            }
          ]
        }
      ],
    }
    /*
        {
         /!* title: 'UzCard',
          root: false,
          icon: 'fas fa-star',
          page: '/uzcard',
          bullet: 'dot',
          mega: true,*!/
          title: 'UzCard',
          bullet: 'dot',
          page: '/uzcard',
          mega: true,
          submenu: [
            {
              title: 'Uzcard Terminal',
              bullet: 'dot',
              page: '/uzcard/uzcard/terminal',
            }
          ]
        }*/
  ]
};
